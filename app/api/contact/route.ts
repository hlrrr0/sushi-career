import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';
import { ContactInquiry } from '@/lib/types/database';

export async function POST(request: NextRequest) {
  try {
    const body: ContactInquiry = await request.json();
    const supabase = getServiceSupabase();

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

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
