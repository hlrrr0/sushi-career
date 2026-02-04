'use client';

import { useState } from 'react';

type UserType = 'employer' | 'jobseeker' | 'other' | '';

export default function ContactForm() {
  const [userType, setUserType] = useState<UserType>('');
  const [formData, setFormData] = useState({
    // 共通項目
    name: '',
    email: '',
    phone: '',
    // 企業採用担当者用
    companyName: '',
    // 求職者用
    desiredPosition: '',
    experience: '',
    // 共通
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    // 選択が変わったらフォームをリセット
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      desiredPosition: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // データベースに保存
      const inquiryData = {
        user_type: userType as 'employer' | 'jobseeker' | 'other',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
        ...(userType === 'employer' && { company_name: formData.companyName }),
        ...(userType === 'jobseeker' && {
          desired_position: formData.desiredPosition,
          experience_years: formData.experience
        }),
        status: 'new' as const
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }
      
      setSubmitStatus('success');
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        desiredPosition: '',
        experience: '',
        message: ''
      });
      setUserType('');
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        {/* ユーザータイプ選択 */}
        <div style={{ marginBottom: '32px' }}>
          <label style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '12px',
            color: '#1f2937'
          }}>
            お問い合わせ種別 <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              border: userType === 'employer' ? '2px solid #f97316' : '2px solid #e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: userType === 'employer' ? '#fff7ed' : 'white',
              transition: 'all 0.2s'
            }}>
              <input
                type="radio"
                name="userType"
                value="employer"
                checked={userType === 'employer'}
                onChange={(e) => handleUserTypeChange(e.target.value as UserType)}
                required
                style={{ marginRight: '12px', width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>企業採用担当者</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
                  求人掲載や採用に関するお問い合わせ
                </div>
              </div>
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              border: userType === 'jobseeker' ? '2px solid #f97316' : '2px solid #e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: userType === 'jobseeker' ? '#fff7ed' : 'white',
              transition: 'all 0.2s'
            }}>
              <input
                type="radio"
                name="userType"
                value="jobseeker"
                checked={userType === 'jobseeker'}
                onChange={(e) => handleUserTypeChange(e.target.value as UserType)}
                required
                style={{ marginRight: '12px', width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>求職者</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
                  求人や転職に関するお問い合わせ
                </div>
              </div>
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              border: userType === 'other' ? '2px solid #f97316' : '2px solid #e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: userType === 'other' ? '#fff7ed' : 'white',
              transition: 'all 0.2s'
            }}>
              <input
                type="radio"
                name="userType"
                value="other"
                checked={userType === 'other'}
                onChange={(e) => handleUserTypeChange(e.target.value as UserType)}
                required
                style={{ marginRight: '12px', width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>その他</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
                  サービスに関する一般的なお問い合わせ
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* 動的フォーム項目 */}
        {userType && (
          <div style={{
            padding: '24px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            {/* 企業採用担当者用フォーム */}
            {userType === 'employer' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    会社名 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="株式会社〇〇"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    担当者名 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="山田 太郎"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    メールアドレス <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="example@company.com"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    電話番号 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="03-1234-5678"
                  />
                </div>
              </>
            )}

            {/* 求職者用フォーム */}
            {userType === 'jobseeker' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    お名前 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="山田 太郎"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    メールアドレス <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="example@email.com"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    電話番号 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="090-1234-5678"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    希望職種 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <select
                    name="desiredPosition"
                    value={formData.desiredPosition}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="">選択してください</option>
                    <option value="大将・料理長">大将・料理長</option>
                    <option value="副料理長">副料理長</option>
                    <option value="職人">職人</option>
                    <option value="見習い">見習い</option>
                    <option value="海外勤務">海外勤務</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    寿司職人としての経験年数 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="">選択してください</option>
                    <option value="未経験">未経験</option>
                    <option value="1年未満">1年未満</option>
                    <option value="1〜3年">1〜3年</option>
                    <option value="3〜5年">3〜5年</option>
                    <option value="5〜10年">5〜10年</option>
                    <option value="10年以上">10年以上</option>
                  </select>
                </div>
              </>
            )}

            {/* その他用フォーム */}
            {userType === 'other' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    お名前 <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="山田 太郎"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#374151'
                  }}>
                    メールアドレス <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                    placeholder="example@email.com"
                  />
                </div>
              </>
            )}

            {/* 共通: お問い合わせ内容 */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#374151'
              }}>
                お問い合わせ内容 <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
          </div>
        )}

        {/* 送信状態メッセージ */}
        {submitStatus === 'success' && (
          <div style={{
            padding: '16px',
            backgroundColor: '#d1fae5',
            border: '1px solid #10b981',
            borderRadius: '8px',
            marginBottom: '20px',
            color: '#065f46'
          }}>
            お問い合わせを受け付けました。担当者より折り返しご連絡いたします。
          </div>
        )}

        {submitStatus === 'error' && (
          <div style={{
            padding: '16px',
            backgroundColor: '#fee2e2',
            border: '1px solid #ef4444',
            borderRadius: '8px',
            marginBottom: '20px',
            color: '#991b1b'
          }}>
            送信に失敗しました。もう一度お試しください。
          </div>
        )}

        {/* 送信ボタン */}
        {userType && (
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: isSubmitting ? '#9ca3af' : '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#ea580c';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#f97316';
              }
            }}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        )}
      </form>
    </div>
  );
}
