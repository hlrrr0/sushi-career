import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';
import { ContactInquiry } from '@/lib/types/database';
import { notifyContactInquiry } from '@/lib/utils/slack';

export async function POST(request: NextRequest) {
  try {
    const body: ContactInquiry = await request.json();
    const supabase = getServiceSupabase();

    console.log('[Contact API] Received request:', { user_type: body.user_type, name: body.name });

    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([body])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save inquiry', details: error.message },
        { status: 500 }
      );
    }

    console.log('[Contact API] Data saved, sending Slack notification...');

    // Slack通知を送信（非同期、エラーは無視）
    notifyContactInquiry(data).catch(err => 
      console.error('Failed to send Slack notification:', err)
    );

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
