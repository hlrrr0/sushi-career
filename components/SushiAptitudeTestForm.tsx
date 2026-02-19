'use client';

import { useState, useEffect, useRef } from 'react';
import { JobApplication, AptitudeTestResults } from '@/lib/types/database';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15; // 15は完了画面

interface FormData {
  dexterity: string;
  physicalStrength: string;
  learningAttitude: string;
  patience: string;
  communication: string;
  passion: string;
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  salaryKnowledge: string;
  aiDemand: string;
  futureVision: string;
}

// チャットバブルコンポーネント
function ChatBubble({ message, isBot = true }: { message: string; isBot?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: isBot ? 'flex-start' : 'flex-end',
      marginBottom: '16px'
    }}>
      <div style={{
        maxWidth: '80%',
        padding: '12px 16px',
        borderRadius: isBot ? '0 12px 12px 12px' : '12px 0 12px 12px',
        backgroundColor: isBot ? '#f3f4f6' : '#f97316',
        color: isBot ? '#1f2937' : 'white',
        fontSize: '15px',
        lineHeight: '1.5'
      }}>
        {message}
      </div>
    </div>
  );
}

// タイピングインジケーターコンポーネント
function TypingIndicator() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '16px'
    }}>
      <div style={{
        padding: '12px 16px',
        borderRadius: '0 12px 12px 12px',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        gap: '4px'
      }}>
        <div className="typing-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'typing 1.4s infinite' }}></div>
        <div className="typing-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'typing 1.4s infinite 0.2s' }}></div>
        <div className="typing-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'typing 1.4s infinite 0.4s' }}></div>
      </div>
    </div>
  );
}

// テキスト入力コンポーネント
function TextInput({ onSubmit, placeholder }: { onSubmit: (value: string) => void; placeholder: string }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px 16px',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '15px',
          outline: 'none'
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = '#f97316'}
        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
        autoFocus
      />
      <button
        type="submit"
        style={{
          marginTop: '8px',
          width: '100%',
          padding: '12px',
          backgroundColor: '#f97316',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        送信
      </button>
    </form>
  );
}

// 日付入力コンポーネント
function DateInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '15px',
          outline: 'none'
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = '#f97316'}
        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
        autoFocus
      />
      <button
        type="submit"
        style={{
          marginTop: '8px',
          width: '100%',
          padding: '12px',
          backgroundColor: '#f97316',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        送信
      </button>
    </form>
  );
}

// 回答をスコアに変換する関数
const calculateScore = (field: keyof FormData, value: string): number => {
  const scoreMap: Record<keyof FormData, Record<string, number>> = {
    dexterity: {
      '料理やハンドメイド作品を作るのが得意': 5,
      '細かい作業は苦ではない': 4,
      '普通程度': 3,
      '細かい作業はあまり得意ではない': 2,
      '手先を使う作業は苦手': 1
    },
    physicalStrength: {
      '体力には自信がある': 5,
      '立ち仕事の経験があり慣れている': 4,
      '多少の立ち仕事なら問題ない': 3,
      '長時間はやや不安がある': 2,
      '立ち仕事は避けたい': 1
    },
    learningAttitude: {
      '積極的に学びたい・成長したい': 5,
      '必要なことは学んでいきたい': 4,
      'ある程度は学びたい': 3,
      'あまり学習は得意ではない': 2,
      '必要最低限でいい': 1
    },
    patience: {
      '何年かかっても一人前になりたい': 5,
      'じっくり学んでいきたい': 4,
      '2〜3年くらいなら頑張れる': 3,
      '早く一人前になりたい': 2,
      'できるだけ短期間で習得したい': 1
    },
    communication: {
      'とても好き！人と話すのが得意': 5,
      '好きな方だと思う': 4,
      '普通程度': 3,
      'あまり得意ではない': 2,
      '黙々と作業する方が好き': 1
    },
    passion: {
      '寿司が大好きで、自分で作りたい': 5,
      '手に職をつけて独立したい': 4,
      '日本の伝統文化に興味がある': 3,
      '安定した仕事に就きたい': 2,
      'なんとなく興味がある': 1
    },
    name: {},
    birthDate: {},
    email: {},
    phone: {},
    salaryKnowledge: {},
    aiDemand: {},
    futureVision: {}
  };

  return scoreMap[field]?.[value] || 0;
};

// 適性度を計算する関数
const calculateAptitude = (data: FormData): { percentage: number; level: string; message: string } => {
  const totalScore = 
    calculateScore('dexterity', data.dexterity) +
    calculateScore('physicalStrength', data.physicalStrength) +
    calculateScore('learningAttitude', data.learningAttitude) +
    calculateScore('patience', data.patience) +
    calculateScore('communication', data.communication) +
    calculateScore('passion', data.passion);

  // 6問 × 5点 = 30点満点
  const percentage = Math.round((totalScore / 30) * 100);

  let level = '';
  let message = '';

  if (percentage >= 90) {
    level = '非常に高い適性';
    message = 'あなたは寿司職人に非常に向いています！素晴らしい資質をお持ちです。';
  } else if (percentage >= 75) {
    level = '高い適性';
    message = 'あなたは寿司職人に向いています！チャレンジする価値は大いにあります。';
  } else if (percentage >= 60) {
    level = '適性あり';
    message = 'あなたには寿司職人としての適性があります。研修でさらに成長できるでしょう。';
  } else if (percentage >= 45) {
    level = 'やや適性あり';
    message = '努力次第で寿司職人として活躍できる可能性があります。サポート体制の整った環境がおすすめです。';
  } else {
    level = '要検討';
    message = '残念ながら、現時点では寿司職人への適性が低いという結果になりました。ただし、別の飲食業界のキャリアもご紹介できますので、一度ご相談ください。';
  }

  return { percentage, level, message };
};

export default function SushiAptitudeTestForm() {
  const STORAGE_KEY = 'sushi_aptitude_test';
  
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    dexterity: '',
    physicalStrength: '',
    learningAttitude: '',
    patience: '',
    communication: '',
    passion: '',
    name: '',
    birthDate: '',
    email: '',
    phone: '',
    salaryKnowledge: '',
    aiDemand: '',
    futureVision: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [sessionId, setSessionId] = useState(`aptitude_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [aptitudeResult, setAptitudeResult] = useState<{ percentage: number; level: string; message: string } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // クライアントサイドでマウントされたらLocalStorageから復元
  useEffect(() => {
    setMounted(true);
    
    if (typeof window === 'undefined') return;
    
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedData = JSON.parse(saved);
        if (savedData.step) setStep(savedData.step);
        if (savedData.formData) setFormData(savedData.formData);
        if (savedData.sessionId) setSessionId(savedData.sessionId);
        if (savedData.applicationId) setApplicationId(savedData.applicationId);
        if (savedData.aptitudeResult) setAptitudeResult(savedData.aptitudeResult);
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  }, []);

  // LocalStorageに保存する関数
  const saveToStorage = () => {
    if (typeof window === 'undefined') return;
    try {
      const dataToSave = {
        step,
        formData,
        sessionId,
        applicationId,
        aptitudeResult
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  };

  // やり直し機能（LocalStorageをクリア）
  const handleReset = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  useEffect(() => {
    // ステップが変わったらmessageIndexをリセット
    setMessageIndex(0);
    
    // タイピングアニメーション
    if (step <= 14) {
      setIsTyping(true);
      setShowOptions(false);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setShowOptions(true);
      }, 800);
      return () => clearTimeout(timer);
    }
    
    // ステップ11で適性度を計算
    if (step === 11 && !aptitudeResult) {
      const result = calculateAptitude(formData);
      setAptitudeResult(result);
    }
    
    // ステップ15（完了）に到達したらcompleted_atを保存
    if (step === 15 && applicationId) {
      saveProgress(formData, 15);
    }
  }, [step]);

  // メッセージを順次表示する
  useEffect(() => {
    if (step === 11 || step === 13 || step === 14 || step === 15) {
      const timer = setTimeout(() => {
        setMessageIndex(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [messageIndex, step]);

  // データ変更時にLocalStorageに保存（マウント後のみ）
  useEffect(() => {
    if (!mounted) return;
    saveToStorage();
  }, [step, formData, applicationId, aptitudeResult, mounted]);

  // スクロール処理
  useEffect(() => {
    if (showOptions) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    }
  }, [showOptions, step]);

  // データベースに進捗を保存する関数
  const saveProgress = async (currentFormData: FormData, currentStep: number) => {
    try {
      // 適正検査の結果を計算（質問6まで完了している場合）
      let aptitudeResults = null;
      if (currentFormData.passion && aptitudeResult) {
        const totalScore = 
          calculateScore('dexterity', currentFormData.dexterity) +
          calculateScore('physicalStrength', currentFormData.physicalStrength) +
          calculateScore('learningAttitude', currentFormData.learningAttitude) +
          calculateScore('patience', currentFormData.patience) +
          calculateScore('communication', currentFormData.communication) +
          calculateScore('passion', currentFormData.passion);

        aptitudeResults = {
          answers: {
            dexterity: currentFormData.dexterity,
            physicalStrength: currentFormData.physicalStrength,
            learningAttitude: currentFormData.learningAttitude,
            patience: currentFormData.patience,
            communication: currentFormData.communication,
            passion: currentFormData.passion,
            salaryKnowledge: currentFormData.salaryKnowledge,
            aiDemand: currentFormData.aiDemand,
            futureVision: currentFormData.futureVision
          },
          score: totalScore,
          percentage: aptitudeResult.percentage,
          level: aptitudeResult.level,
          message: aptitudeResult.message,
          timestamp: new Date().toISOString()
        };
      }

      const applicationData: JobApplication = {
        session_id: sessionId,
        current_step: currentStep,
        name: currentFormData.name || undefined,
        birth_date: currentFormData.birthDate || undefined,
        email: currentFormData.email || undefined,
        phone: currentFormData.phone || undefined,
        aptitude_test_results: aptitudeResults || undefined,
        status: currentStep === 15 ? 'completed' : 'in_progress',
        ...(currentStep === 15 && { completed_at: new Date().toISOString() })
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
      console.error('Error saving progress:', error);
    }
  };

  const handleOptionClick = async (field: keyof FormData, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    const nextStep = (step + 1) as Step;
    await saveProgress(newFormData, nextStep);
    setStep(nextStep);
  };

  const handleTextSubmit = async (field: keyof FormData, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    const nextStep = (step + 1) as Step;
    
    // ステップ10（電話番号）からステップ11（結果表示）に進む場合、審査中エフェクトを表示
    if (step === 10 && field === 'phone') {
      setIsAnalyzing(true);
      
      // 2.5秒間のローディング後に結果を表示
      setTimeout(() => {
        const result = calculateAptitude(newFormData);
        setAptitudeResult(result);
        setIsAnalyzing(false);
        saveProgress(newFormData, nextStep);
        setStep(nextStep);
      }, 2500);
      
      return; // ここで処理を終了
    }
    
    await saveProgress(newFormData, nextStep);
    setStep(nextStep);
  };

  return (
    <div style={{ padding: '24px' }}>
      <style jsx global>{`
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
        }
      `}</style>
      
      <div>
        {/* 初期メッセージ */}
        <ChatBubble message="こんにちは！鮨キャリアドバイザーです🍣" />
        <ChatBubble message="寿司職人適正検査を始めます。いくつかの質問に答えていただくことで、あなたの寿司職人としての適性を診断し、最適な求人をご紹介します。" />

        {/* Step 1: 手先の器用さ */}
        {step >= 1 && (
          <>
            {isTyping && step === 1 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問1/10】手先の器用さについて教えてください" />
            )}
            
            {formData.dexterity && (
              <ChatBubble message={formData.dexterity} isBot={false} />
            )}

            {step === 1 && showOptions && !formData.dexterity && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '料理やハンドメイド作品を作るのが得意',
                  '細かい作業は苦ではない',
                  '普通程度',
                  '細かい作業はあまり得意ではない',
                  '手先を使う作業は苦手'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('dexterity', option)}
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

        {/* Step 2: 体力・立ち仕事 */}
        {step >= 2 && (
          <>
            {isTyping && step === 2 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問2/10】長時間の立ち仕事についてどう思いますか？" />
            )}
            
            {formData.physicalStrength && (
              <ChatBubble message={formData.physicalStrength} isBot={false} />
            )}

            {step === 2 && showOptions && !formData.physicalStrength && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '体力には自信がある',
                  '立ち仕事の経験があり慣れている',
                  '多少の立ち仕事なら問題ない',
                  '長時間はやや不安がある',
                  '立ち仕事は避けたい'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('physicalStrength', option)}
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

        {/* Step 3: 学習意欲 */}
        {step >= 3 && (
          <>
            {isTyping && step === 3 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問3/10】新しい技術を学ぶことについてどう考えますか？" />
            )}
            
            {formData.learningAttitude && (
              <ChatBubble message={formData.learningAttitude} isBot={false} />
            )}

            {step === 3 && showOptions && !formData.learningAttitude && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '積極的に学びたい・成長したい',
                  '必要なことは学んでいきたい',
                  'ある程度は学びたい',
                  'あまり学習は得意ではない',
                  '必要最低限でいい'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('learningAttitude', option)}
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

        {/* Step 4: 忍耐力 */}
        {step >= 4 && (
          <>
            {isTyping && step === 4 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問4/10】修行期間（基礎を学ぶ期間）についてどう考えますか？" />
            )}
            
            {formData.patience && (
              <ChatBubble message={formData.patience} isBot={false} />
            )}

            {step === 4 && showOptions && !formData.patience && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '何年かかっても一人前になりたい',
                  'じっくり学んでいきたい',
                  '2〜3年くらいなら頑張れる',
                  '早く一人前になりたい',
                  'できるだけ短期間で習得したい'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('patience', option)}
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

        {/* Step 5: コミュニケーション */}
        {step >= 5 && (
          <>
            {isTyping && step === 5 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問5/10】人と話すことは好きですか？" />
            )}
            
            {formData.communication && (
              <ChatBubble message={formData.communication} isBot={false} />
            )}

            {step === 5 && showOptions && !formData.communication && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  'とても好き！人と話すのが得意',
                  '好きな方だと思う',
                  '普通程度',
                  'あまり得意ではない',
                  '黙々と作業する方が好き'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('communication', option)}
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

        {/* Step 6: 寿司への情熱 */}
        {step >= 6 && (
          <>
            {isTyping && step === 6 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問6/10】なぜ寿司職人になりたいと思いましたか？" />
            )}
            
            {formData.passion && (
              <ChatBubble message={formData.passion} isBot={false} />
            )}

            {step === 6 && showOptions && !formData.passion && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '寿司が大好きで、自分で作りたい',
                  '手に職をつけて独立したい',
                  '日本の伝統文化に興味がある',
                  '安定した仕事に就きたい',
                  'なんとなく興味がある'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('passion', option)}
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

        {/* Step 7: 名前 */}
        {step >= 7 && (
          <>
            {isTyping && step === 7 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問7/10】お名前を教えてください" />
            )}
            
            {formData.name && (
              <ChatBubble message={formData.name} isBot={false} />
            )}

            {step === 7 && showOptions && !formData.name && (
              <TextInput
                onSubmit={(value) => handleTextSubmit('name', value)}
                placeholder="例: 山田太郎"
              />
            )}
          </>
        )}

        {/* Step 8: 生年月日 */}
        {step >= 8 && (
          <>
            {isTyping && step === 8 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問8/10】生年月日を教えてください" />
            )}
            
            {formData.birthDate && (
              <ChatBubble message={formData.birthDate} isBot={false} />
            )}

            {step === 8 && showOptions && !formData.birthDate && (
              <DateInput
                onSubmit={(value) => handleTextSubmit('birthDate', value)}
              />
            )}
          </>
        )}

        {/* Step 9: メールアドレス */}
        {step >= 9 && (
          <>
            {isTyping && step === 9 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問9/10】メールアドレスを教えてください" />
            )}
            
            {formData.email && (
              <ChatBubble message={formData.email} isBot={false} />
            )}

            {step === 9 && showOptions && !formData.email && (
              <TextInput
                onSubmit={(value) => handleTextSubmit('email', value)}
                placeholder="例: example@email.com"
              />
            )}
          </>
        )}

        {/* Step 10: 電話番号 */}
        {step >= 10 && !isAnalyzing && (
          <>
            {isTyping && step === 10 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【質問10/10】最後に、電話番号を教えてください" />
            )}
            
            {formData.phone && (
              <ChatBubble message={formData.phone} isBot={false} />
            )}

            {step === 10 && showOptions && !formData.phone && (
              <TextInput
                onSubmit={(value) => handleTextSubmit('phone', value)}
                placeholder="例: 090-1234-5678"
              />
            )}
          </>
        )}

        {/* 審査中ローディング画面 */}
        {isAnalyzing && (
          <>
            <ChatBubble message={formData.phone} isBot={false} />
            <div style={{
              marginTop: '32px',
              marginBottom: '32px',
              padding: '40px 24px',
              backgroundColor: '#fff7ed',
              borderRadius: '12px',
              border: '2px solid #f97316',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '24px',
                marginBottom: '24px',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}>
                🍣
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#9a3412',
                marginBottom: '12px'
              }}>
                適性を診断中...
              </div>
              <div style={{
                fontSize: '14px',
                color: '#7c2d12',
                lineHeight: '1.6'
              }}>
                あなたの回答を分析しています
              </div>
              <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f97316',
                  animation: 'bounce 1.4s infinite ease-in-out'
                }}></div>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f97316',
                  animation: 'bounce 1.4s infinite ease-in-out 0.2s'
                }}></div>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f97316',
                  animation: 'bounce 1.4s infinite ease-in-out 0.4s'
                }}></div>
              </div>
            </div>
          </>
        )}

        {/* Step 11: 完了 */}
        {step === 11 && aptitudeResult && (
          <>
            {messageIndex >= 0 && <ChatBubble message="適正検査が完了しました！" />}
            
            {/* 適性度の結果表示 */}
            {messageIndex >= 1 && <div style={{
              marginTop: '24px',
              padding: '24px',
              backgroundColor: '#fff7ed',
              borderRadius: '12px',
              border: '2px solid #f97316'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                <div style={{
                  fontSize: '16px',
                  color: '#9a3412',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}>
                  🍣 あなたの寿司職人適性度
                </div>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#f97316',
                  marginBottom: '8px'
                }}>
                  {aptitudeResult.percentage}%
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#9a3412',
                  marginBottom: '12px'
                }}>
                  {aptitudeResult.level}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#7c2d12',
                  lineHeight: '1.6',
                  padding: '0 16px'
                }}>
                  {aptitudeResult.message}
                </div>
              </div>
            </div>}
            
            {/* 前向きなメッセージ */}
            {messageIndex >= 2 && <ChatBubble message={
              aptitudeResult.percentage >= 75
                ? "素晴らしい結果ですね！あなたには寿司職人として輝く可能性が大いにあります。未経験からでも、多くの先輩方が活躍している業界です。"
                : aptitudeResult.percentage >= 60
                ? "良い結果です！あなたの適性は十分にあります。充実した研修制度のある店舗で学べば、確実にスキルアップできますよ。"
                : aptitudeResult.percentage >= 45
                ? "大丈夫です！寿司職人は経験と努力で誰でも目指せる職業です。サポート体制の整った環境で、一歩ずつ確実に成長できます。"
                : "この結果を踏まえて、他の飲食業界のキャリアも含めて幅広くご提案させていただきます。"
            } />}
            {messageIndex >= 3 && <ChatBubble message="続いて、寿司職人のキャリアについていくつか質問させてください。あなたの未来を考えるヒントになるはずです。" />}

            {showOptions && messageIndex >= 3 && (
              <button
                onClick={() => setStep(12)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  marginTop: '16px',
                  marginBottom: '24px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#f97316',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
              >
                次へ進む →
              </button>
            )}
          </>
        )}

        {/* Step 12: 初任給についての知識 */}
        {step >= 12 && (
          <>
            {isTyping && step === 12 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【追加質問1】寿司職人としての初任給が平均いくらかご存知ですか？" />
            )}
            
            {formData.salaryKnowledge && (
              <ChatBubble message={formData.salaryKnowledge} isBot={false} />
            )}

            {step === 12 && showOptions && !formData.salaryKnowledge && (
              <div style={{ marginBottom: '24px' }}>
                {['はい', 'いいえ'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('salaryKnowledge', option)}
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

        {/* 初任給の情報提供 */}
        {step >= 13 && formData.salaryKnowledge && messageIndex >= 0 && (
          <>
            {formData.salaryKnowledge === 'はい' ? (
              <ChatBubble message="そうなんですね！実は、未経験からでも月給25〜30万円程度でスタートできる店舗が多いんです。研修制度が充実している店舗では、技術を学びながらしっかり収入も得られます。" />
            ) : (
              <ChatBubble message="実は、未経験からでも月給25〜30万円程度でスタートできる店舗が多いんです！意外と高いと思いませんか？研修制度が充実している店舗では、技術を学びながらしっかり収入も得られます。" />
            )}
          </>
        )}

        {/* Step 13: AI時代における需要 */}
        {step >= 13 && messageIndex >= 1 && (
          <>
            {isTyping && step === 13 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【追加質問2】AI時代において、寿司職人の需要が高まっているのをご存知ですか？" />
            )}
            
            {formData.aiDemand && (
              <ChatBubble message={formData.aiDemand} isBot={false} />
            )}

            {step === 13 && showOptions && !formData.aiDemand && (
              <div style={{ marginBottom: '24px' }}>
                {['知っている', '知らない'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('aiDemand', option)}
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

        {/* AI時代の情報提供 */}
        {step >= 14 && formData.aiDemand && messageIndex >= 0 && (
          <>
            {formData.aiDemand === '知っている' ? (
              <ChatBubble message="その通りです！AIには真似できない「職人の技」と「おもてなしの心」が、今まさに求められているんです。また、海外でも日本食や寿司ブームが起きており、チャンスが広がっております。グローバルに活躍する機会も豊富です。" />
            ) : (
              <ChatBubble message="実は、AIやロボットには真似できない「職人の技」と「おもてなしの心」が、今まさに求められているんです！また、海外でも日本食や寿司ブームが起きており、チャンスが広がっております。グローバルに活躍する機会も豊富で、将来性のある職業なんですよ。" />
            )}
          </>
        )}

        {/* Step 14: 未来への想像 */}
        {step >= 14 && messageIndex >= 1 && (
          <>
            {isTyping && step === 14 ? (
              <TypingIndicator />
            ) : (
              <ChatBubble message="【追加質問3】もし寿司職人として5年後、あなたはどんな姿になっていたいですか？どれが一番近いですか？" />
            )}
            
            {formData.futureVision && (
              <ChatBubble message={formData.futureVision} isBot={false} />
            )}

            {step === 14 && showOptions && !formData.futureVision && (
              <div style={{ marginBottom: '24px' }}>
                {[
                  '一流店で腕を磨いている',
                  '自分の店を持っている',
                  '海外で活躍している',
                  'まだ想像できない'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick('futureVision', option)}
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

        {/* 未来への応援メッセージ */}
        {step >= 15 && formData.futureVision && (
          <>
            {formData.futureVision === '一流店で腕を磨いている' && (
              <ChatBubble message="素晴らしい目標ですね！一流店では最高の技術と心構えを学べます。鮨キャリでは、そんな一流店への就職もサポートしています。" />
            )}
            {formData.futureVision === '自分の店を持っている' && (
              <ChatBubble message="独立開業という夢、応援します！実際に20代、30代で独立を果たした先輩も多数います。まずは基礎をしっかり学べる店舗からスタートしましょう。" />
            )}
            {formData.futureVision === '海外で活躍している' && (
              <ChatBubble message="グローバルな視点、素晴らしいです！日本の寿司職人は世界中で求められています。海外展開している企業での研修制度もありますよ。" />
            )}
            {formData.futureVision === 'まだ想像できない' && (
              <ChatBubble message="大丈夫です！まずは一歩を踏み出してみましょう。実際に働き始めると、自分の目指す姿が見えてきます。一緒に未来を描いていきましょう。" />
            )}
          </>
        )}

        {/* Step 15: 完了 */}
        {step === 15 && messageIndex >= 1 && (
          <>
            {messageIndex >= 1 && <ChatBubble message="すべての質問が完了しました！ありがとうございます。" />}
            
            {messageIndex >= 2 && <div style={{
              marginTop: '24px',
              padding: '20px',
              backgroundColor: '#fff7ed',
              borderRadius: '12px',
              border: '2px solid #f97316',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#9a3412',
                marginBottom: '8px'
              }}>
                ✓ 診断完了
              </div>
              <div style={{
                fontSize: '14px',
                color: '#7c2d12',
                lineHeight: '1.6'
              }}>
                次のステップをお選びください
              </div>
            </div>}

            {messageIndex >= 3 && <div style={{
              marginTop: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}>
              {/* オプション1: アドバイザーとオンライン面談 */}
              <div style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '2px solid #f97316',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ea580c';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f97316';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '12px',
                  textAlign: 'center'
                }}>
                  📅
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  ①アドバイザーとオンラインでお話し
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  marginBottom: '16px',
                  lineHeight: '1.5',
                  textAlign: 'center',
                  flexGrow: 1
                }}>
                  キャリアアドバイザーがあなたの疑問や不安にお答えします
                </div>
                <a
                  href="https://calendar.app.google/iPMMEieT2ajyFgNp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#f97316',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '14px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                >
                  日程を見てみる
                </a>
              </div>

              {/* オプション2: LINE友だち追加 */}
              <div style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '2px solid #10b981',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#059669';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '12px',
                  textAlign: 'center'
                }}>
                  💬
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  ②LINEお友達追加で、情報収集！
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  marginBottom: '16px',
                  lineHeight: '1.5',
                  textAlign: 'center',
                  flexGrow: 1
                }}>
                  適正検査の結果と求人情報をLINEでお送りします
                </div>
                <a
                  href="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '14px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
                >
                  LINEお友達追加
                </a>
              </div>
            </div>}

            {/* やり直しボタン */}
            {messageIndex >= 4 && <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <button
                onClick={handleReset}
                style={{
                  padding: '12px 32px',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4b5563'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6b7280'}
              >
                🔄 もう一度やり直す
              </button>
            </div>}
          </>
        )}

        <div ref={chatEndRef} />
      </div>
    </div>
  );
}
