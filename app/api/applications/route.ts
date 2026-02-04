import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { JobApplication } from '@/lib/types/database';
import { notifyApplicationCompleted } from '@/lib/utils/slack';

export async function POST(request: NextRequest) {
  try {
    const body: JobApplication = await request.json();

    const { data, error } = await supabase
      .from('job_applications')
      .insert([body])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save application', details: error.message },
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

export async function PUT(request: NextRequest) {
  try {
    const body: JobApplication & { id: string } = await request.json();
    const { id, ...updateData } = body;

    const { data, error } = await supabase
      .from('job_applications')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to update application', details: error.message },
        { status: 500 }
      );
    }

    // 応募が完了した場合のみSlack通知を送信
    if (data.status === 'completed' && data.completed_at) {
      notifyApplicationCompleted(data).catch(err => 
        console.error('Failed to send Slack notification:', err)
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
