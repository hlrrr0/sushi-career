'use client';

import { useState, useEffect, useRef } from 'react';
import { JobApplication } from '@/lib/types/database';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; // 8は完了画面

interface FormData {
  desiredTiming: string;
  experience: string;
  location: string;
  name: string;
  birthDate: string;
  email: string;
  phone: string;
}

export default function ChatApplicationForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    desiredTiming: '',
    experience: '',
    location: '',
    name: '',
    birthDate: '',
    email: '',
    phone: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  useEffect(() => {
    // タイピングアニメーション
    if (step <= 7) {
      setIsTyping(true);
      setShowOptions(false);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setShowOptions(true);
      }, 800);
      return () => clearTimeout(timer);
    }
    
    // ステップ8（完了）に到達したらcompleted_atを保存
    if (step === 8 && applicationId) {
      saveProgress(formData, 8);
    }
  }, [step]);

  // スクロール処理を別のuseEffectに分離（入力後のみスクロール）
  useEffect(() => {
    if (showOptions) {
      // スムーズにスクロールするが、遅延を入れる
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    }
  }, [showOptions, step]);

  // データベースに進捗を保存する関数
  const saveProgress = async (currentFormData: FormData, currentStep: number) => {
    try {
      const applicationData: JobApplication = {
        session_id: sessionId,
        current_step: currentStep,
        desired_timing: currentFormData.desiredTiming || undefined,
        experience: currentFormData.experience || undefined,
        location: currentFormData.location || undefined,
        name: currentFormData.name || undefined,
        birth_date: currentFormData.birthDate || undefined,
        email: currentFormData.email || undefined,
        phone: currentFormData.phone || undefined,
        status: currentStep === 8 ? 'completed' : 'in_progress',
        ...(currentStep === 8 && { completed_at: new Date().toISOString() })
      };

      const method = applicationId ? 'PUT' : 'POST';
      const body = applicationId ? { ...applicationData, id: applicationId } : applicationData;

      const response = await fetch('/api/applications', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const { data } = await response.json();
        if (!applicationId && data.id) {
          setApplicationId(data.id);
        }
      }
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const handleOptionClick = async (field: keyof FormData, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    // 次のステップに進む
    const nextStep = (step + 1) as Step;
    
    // 進捗を保存（次のステップ番号で保存）
    await saveProgress(newFormData, nextStep);
    
    setTimeout(() => {
      if (step < 8) {
        setStep(nextStep);
      }
    }, 300);
  };

  const handleTextSubmit = async (field: keyof FormData, value: string) => {
    if (!value.trim()) return;
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    // 次のステップに進む
    const nextStep = (step + 1) as Step;
    
    // 進捗を保存（次のステップ番号で保存）
    await saveProgress(newFormData, nextStep);
    
    setTimeout(() => {
      if (step < 8) {
        setStep(nextStep);
      }
    }, 300);
  };

  const ChatBubble = ({ message, isBot = true }: { message: string; isBot?: boolean }) => (
    <div style={{
      display: 'flex',
      justifyContent: isBot ? 'flex-start' : 'flex-end',
      marginBottom: '16px'
    }}>
      <div style={{
        maxWidth: '80%',
        padding: '12px 16px',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        backgroundColor: isBot ? '#f3f4f6' : '#f97316',
        color: isBot ? '#1f2937' : 'white',
        fontSize: '15px',
        lineHeight: '1.5'
      }}>
        {message}
      </div>
    </div>
  );

  const TypingIndicator = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '16px'
    }}>
      <div style={{
        padding: '12px 16px',
        borderRadius: '4px 16px 16px 16px',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        gap: '4px'
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#9ca3af',
          animation: 'bounce 1.4s infinite ease-in-out both',
          animationDelay: '-0.32s'
        }}></span>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#9ca3af',
          animation: 'bounce 1.4s infinite ease-in-out both',
          animationDelay: '-0.16s'
        }}></span>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#9ca3af',
          animation: 'bounce 1.4s infinite ease-in-out both'
        }}></span>
        <style jsx>{`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );

  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* チャットエリア */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px',
        backgroundColor: '#ffffff'
      }}>
        {/* 初回メッセージ */}
        <ChatBubble message="こんにちは！鮨キャリアドバイザーです🍣" />
        <ChatBubble message="あなたに最適な求人をご紹介するため、いくつか質問させてください。1分程度で完了します。" />

        {/* Step 1: 転職希望時期 */}
        {step >= 1 && (
          <>
            {isTyping && step === 1 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="転職希望時期を教えてください" />
            )}
            
            {formData.desiredTiming && (
              <ChatBubble message={formData.desiredTiming} isBot={false} />
            )}

            {step === 1 && showOptions && !formData.desiredTiming && (
              <div style={{ marginBottom: '24px' }}>
                {['すぐにでも', '3ヶ月以内', '半年以内', '6ヶ月以上先', '情報収集したい'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('desiredTiming', option)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px 16px',
                      marginBottom: '8px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      backgroundColor: 'white',
                      color: '#1f2937',
                      fontSize: '15px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f97316';
                      e.currentTarget.style.backgroundColor = '#fff7ed';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* Step 2: 経験 */}
        {step >= 2 && (
          <>
            {isTyping && step === 2 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="寿司職人としての経験について教えてください" />
            )}
            
            {formData.experience && (
              <ChatBubble message={formData.experience} isBot={false} />
            )}

            {step === 2 && showOptions && !formData.experience && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '完全に未経験',
                  'スクールなどに通っていたが実務経験はない',
                  '実務経験1年ほど',
                  '実務経験1〜3年',
                  '実務経験3年以上'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('experience', option)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px 16px',
                      marginBottom: '8px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      backgroundColor: 'white',
                      color: '#1f2937',
                      fontSize: '15px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f97316';
                      e.currentTarget.style.backgroundColor = '#fff7ed';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* Step 3: 希望勤務地 */}
        {step >= 3 && (
          <>
            {isTyping && step === 3 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="希望勤務地を教えてください" />
            )}
            
            {formData.location && (
              <ChatBubble message={formData.location} isBot={false} />
            )}

            {step === 3 && showOptions && !formData.location && (
              <PrefectureSelector
                onSelect={(value) => handleOptionClick('location', value)}
              />
            )}
          </>
        )}

        {/* Step 4: 名前 */}
        {step >= 4 && (
          <>
            {isTyping && step === 4 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="お名前を教えてください" />
            )}
            
            {formData.name && (
              <ChatBubble message={formData.name} isBot={false} />
            )}

            {step === 4 && showOptions && !formData.name && (
              <TextInput
                onSubmit={(value) => handleTextSubmit('name', value)}
                placeholder="例: 山田太郎"
              />
            )}
          </>
        )}

        {/* Step 5: 生年月日 */}
        {step >= 5 && (
          <>
            {isTyping && step === 5 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="生年月日を教えてください" />
            )}
            
            {formData.birthDate && (
              <ChatBubble message={formData.birthDate} isBot={false} />
            )}

            {step === 5 && showOptions && !formData.birthDate && (
              <DateInput
                onSubmit={(value) => handleTextSubmit('birthDate', value)}
              />
            )}
          </>
        )}

        {/* Step 6: メールアドレス */}
        {step >= 6 && (
          <>
            {isTyping && step === 6 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="メールアドレスを教えてください" />
            )}
            
            {formData.email && (
              <ChatBubble message={formData.email} isBot={false} />
            )}

            {step === 6 && showOptions && !formData.email && (
              <TextInput
                onSubmit={(value) => handleTextSubmit('email', value)}
                placeholder="例: example@email.com"
              />
            )}
          </>
        )}

        {/* Step 7: 電話番号 */}
        {step >= 7 && (
          <>
            {isTyping && step === 7 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="最後に、電話番号を教えてください" />
            )}
            
            {formData.phone && (
              <ChatBubble message={formData.phone} isBot={false} />
            )}

            {step === 7 && showOptions && !formData.phone && (
              <TextInput
                onSubmit={(value) => handleTextSubmit('phone', value)}
                placeholder="例: 090-1234-5678"
              />
            )}
          </>
        )}

        {/* Step 8: 完了 */}
        {step === 8 && (
          <>
            <ChatBubble message="ありがとうございます！" />
            <ChatBubble message="ご入力いただいた情報をもとに、最適な求人をご紹介いたします。担当者より2営業日以内にご連絡させていただきます。" />
            <div style={{
              marginTop: '24px',
              padding: '20px',
              backgroundColor: '#d1fae5',
              borderRadius: '12px',
              border: '2px solid #10b981'
            }}>
              <div style={{
                textAlign: 'center',
                color: '#065f46',
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                ✓ 送信完了
              </div>
              <div style={{
                textAlign: 'center',
                color: '#047857',
                fontSize: '14px'
              }}>
                LINEでのご連絡も可能です
              </div>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <a
                  href="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  style={{
                    display: 'inline-block',
                    padding: '12px 24px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
                >
                  LINEで友だち追加
                </a>
              </div>
            </div>
          </>
        )}

        <div ref={chatEndRef} />
      </div>
    </div>
  );
}

function DateInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (year && month && day) {
      const formattedDate = `${year}年${month}月${day}日`;
      onSubmit(formattedDate);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - 15 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#f97316'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
        >
          <option value="">年</option>
          {years.map(y => (
            <option key={y} value={y}>{y}年</option>
          ))}
        </select>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#f97316'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
        >
          <option value="">月</option>
          {months.map(m => (
            <option key={m} value={m}>{m}月</option>
          ))}
        </select>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#f97316'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
        >
          <option value="">日</option>
          {days.map(d => (
            <option key={d} value={d}>{d}日</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={!year || !month || !day}
        style={{
          width: '100%',
          padding: '12px 24px',
          backgroundColor: (!year || !month || !day) ? '#d1d5db' : '#f97316',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 'bold',
          cursor: (!year || !month || !day) ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => {
          if (year && month && day) {
            e.currentTarget.style.backgroundColor = '#ea580c';
          }
        }}
        onMouseLeave={(e) => {
          if (year && month && day) {
            e.currentTarget.style.backgroundColor = '#f97316';
          }
        }}
      >
        次へ
      </button>
    </form>
  );
}

function TextInput({ onSubmit, placeholder }: { onSubmit: (value: string) => void; placeholder: string }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoFocus
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            outline: 'none'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#f97316'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
        />
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
        >
          送信
        </button>
      </div>
    </form>
  );
}


function PrefectureSelector({ onSelect }: { onSelect: (value: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
    '岐阜県', '静岡県', '愛知県', '三重県',
    '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
  ];

  const filteredPrefectures = searchTerm
    ? prefectures.filter(pref => pref.includes(searchTerm))
    : prefectures;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ marginBottom: '24px' }}>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="都道府県名を入力..."
        style={{
          width: '100%',
          padding: '12px 16px',
          border: '2px solid #f97316',
          borderRadius: '8px',
          fontSize: '15px',
          marginBottom: '8px',
          outline: 'none',
          boxSizing: 'border-box'
        }}
      />
      <div style={{
        maxHeight: '300px',
        overflowY: 'auto',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        {filteredPrefectures.length > 0 ? (
          filteredPrefectures.map((prefecture) => (
            <button
              key={prefecture}
              onClick={() => onSelect(prefecture)}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                borderBottom: '1px solid #f3f4f6',
                backgroundColor: 'white',
                color: '#1f2937',
                fontSize: '15px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fff7ed'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              {prefecture}
            </button>
          ))
        ) : (
          <div style={{
            padding: '16px',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '14px'
          }}>
            該当する都道府県がありません
          </div>
        )}
      </div>
    </div>
  );
}