import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { JobApplication } from '@/lib/types/database';
import { notifyApplicationCompleted, notifyAptitudeTestCompleted } from '@/lib/utils/slack';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    const status = searchParams.get('status') || 'all';

    let query = supabase
      .from('job_applications')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status !== 'all') {
      query = query.eq('status', status);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch applications', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, count }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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
      
      // 適正検査結果がある場合は専用の通知を送信
      if (data.aptitude_test_results) {
        notifyAptitudeTestCompleted(data).catch(err => 
          console.error('Failed to send Slack notification:', err)
        );
      } else {
        notifyApplicationCompleted(data).catch(err => 
          console.error('Failed to send Slack notification:', err)
        );
      }
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
