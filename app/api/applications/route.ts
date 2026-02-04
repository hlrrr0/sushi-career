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

    // 更新前のデータを取得（completed_atの状態を確認するため）
    const { data: existingData } = await supabase
      .from('job_applications')
      .select('completed_at')
      .eq('id', id)
      .single();

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

    // 応募が完了した場合のみSlack通知を送信（初回完了時のみ）
    const wasNotCompleted = !existingData?.completed_at;
    const isNowCompleted = data.status === 'completed' && data.completed_at;
    
    if (wasNotCompleted && isNowCompleted) {
      console.log('[Applications API] Sending completion notification for:', data.name);
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
