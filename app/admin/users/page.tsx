'use client';

import { useState, useEffect } from 'react';
import { JobApplication } from '@/lib/types/database';

export default function AdminUsersPage() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'completed' | 'in_progress' | 'abandoned'>('all');
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchApplications();
  }, [filter]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter !== 'all') {
        params.append('status', filter);
      }
      
      const response = await fetch(`/api/applications?${params.toString()}`);
      const result = await response.json();
      
      if (response.ok) {
        setApplications(result.data);
        setTotalCount(result.count);
      }
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('ja-JP');
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>
        応募者管理
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>
        合計: {totalCount}件
      </p>

      {/* フィルター */}
      <div style={{ marginBottom: '24px', display: 'flex', gap: '8px' }}>
        {(['all', 'completed', 'in_progress', 'abandoned'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: filter === status ? '2px solid #f97316' : '1px solid #e5e7eb',
              backgroundColor: filter === status ? '#fff7ed' : 'white',
              color: filter === status ? '#f97316' : '#6b7280',
              cursor: 'pointer',
              fontWeight: filter === status ? 'bold' : 'normal'
            }}
          >
            {status === 'all' ? 'すべて' : 
             status === 'completed' ? '完了' :
             status === 'in_progress' ? '進行中' : '放棄'}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          読み込み中...
        </div>
      ) : (
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f9fafb' }}>
              <tr>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>名前</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>メール</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>電話</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>適性度</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>ステータス</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>登録日時</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}>詳細</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} style={{ borderTop: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px' }}>{app.name || '-'}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{app.email || '-'}</td>
                  <td style={{ padding: '12px' }}>{app.phone || '-'}</td>
                  <td style={{ padding: '12px' }}>
                    {app.aptitude_test_results ? (
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        backgroundColor: '#fff7ed',
                        color: '#f97316',
                        fontWeight: 'bold'
                      }}>
                        {app.aptitude_test_results.percentage}%
                      </span>
                    ) : '-'}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor: 
                        app.status === 'completed' ? '#d1fae5' :
                        app.status === 'in_progress' ? '#dbeafe' : '#fee2e2',
                      color:
                        app.status === 'completed' ? '#065f46' :
                        app.status === 'in_progress' ? '#1e40af' : '#991b1b'
                    }}>
                      {app.status === 'completed' ? '完了' :
                       app.status === 'in_progress' ? '進行中' : '放棄'}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{formatDate(app.created_at)}</td>
                  <td style={{ padding: '12px' }}>
                    <button
                      onClick={() => setSelectedApp(app)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#f97316',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      詳細
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 詳細モーダル */}
      {selectedApp && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setSelectedApp(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '800px',
              maxHeight: '80vh',
              overflow: 'auto',
              width: '90%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>
              応募者詳細
            </h2>

            {/* 基本情報 */}
            <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>基本情報</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>名前</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.name || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>生年月日</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.birth_date || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>メール</p>
                  <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{selectedApp.email || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>電話番号</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.phone || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>転職時期</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.desired_timing || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>経験年数</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.experience || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>勤務希望地</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.location || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>ステータス</p>
                  <p style={{ fontWeight: 'bold' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor: 
                        selectedApp.status === 'completed' ? '#d1fae5' :
                        selectedApp.status === 'in_progress' ? '#dbeafe' : '#fee2e2',
                      color:
                        selectedApp.status === 'completed' ? '#065f46' :
                        selectedApp.status === 'in_progress' ? '#1e40af' : '#991b1b'
                    }}>
                      {selectedApp.status === 'completed' ? '完了' :
                       selectedApp.status === 'in_progress' ? '進行中' : '放棄'}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 内部情報 */}
            <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>内部情報</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>ID</p>
                  <p style={{ fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace' }}>{selectedApp.id || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>セッションID</p>
                  <p style={{ fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace' }}>{selectedApp.session_id || '-'}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>現在のステップ</p>
                  <p style={{ fontWeight: 'bold' }}>{selectedApp.current_step || 0}</p>
                </div>
              </div>
            </div>

            {selectedApp.aptitude_test_results && (
              <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>適正検査結果</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <p style={{ color: '#9a3412', fontSize: '14px' }}>適性度</p>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#f97316' }}>
                      {selectedApp.aptitude_test_results.percentage}%
                    </p>
                  </div>
                  <div>
                    <p style={{ color: '#9a3412', fontSize: '14px' }}>レベル</p>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#f97316' }}>
                      {selectedApp.aptitude_test_results.level}
                    </p>
                  </div>
                </div>
                <p style={{ color: '#7c2d12', fontSize: '14px', lineHeight: '1.6' }}>
                  {selectedApp.aptitude_test_results.message}
                </p>

                <h4 style={{ marginTop: '20px', marginBottom: '12px', fontWeight: 'bold' }}>回答内容</h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>手先の器用さ:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.dexterity || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>体力・立ち仕事:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.physicalStrength || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>学習意欲:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.learningAttitude || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>忍耐力:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.patience || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>コミュニケーション:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.communication || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>寿司への情熱:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.passion || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>初任給の知識:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.salaryKnowledge || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>AI時代の需要:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.aiDemand || '-'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>未来のビジョン:</span>
                    <span style={{ fontSize: '14px' }}>{selectedApp.aptitude_test_results.answers.futureVision || '-'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 日時情報 */}
            <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>日時情報</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>登録日時</p>
                  <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{formatDate(selectedApp.created_at)}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>更新日時</p>
                  <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{formatDate(selectedApp.updated_at)}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>完了日時</p>
                  <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{formatDate(selectedApp.completed_at)}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedApp(null)}
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px',
                backgroundColor: '#e5e7eb',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
