'use client';

import { useState, useEffect, useCallback } from 'react';

interface JobExample {
  id: number;
  title: string;
  titleHtml?: string;
  imgPc: string;
  imgSp: string;
  salary: string;
  area: string;
  description: string;
  skills: string[];
  restDays?: string;
}

const jobExamples: JobExample[] = [
  {
    id: 1,
    title: '新店舗OPENをお任せできる「大将候補」',
    imgPc: '/lp/img/job-1.png',
    imgSp: '/lp/img/sp/job-1-sp.png',
    salary: '45万円〜 + 賞与',
    area: '東京',
    description: '新規出店する高級鮨店にて、大将としてカウンター業務全般をお任せします。仕入れ・仕込み・握りはもちろん、メニュー開発やスタッフの育成・マネジメントまで幅広くご担当いただきます。お客様との対話を大切にし、唯一無二の空間を一緒に作り上げてくれる方を求めています。',
    skills: [
      '寿司職人としての実務経験5年以上',
      'カウンターでの接客・おまかせコース対応経験',
      '仕入れ・原価管理の経験',
      'スタッフ育成やマネジメント経験があれば尚可',
    ],
  },
  {
    id: 2,
    title: '老舗人気店の「副料理長候補」',
    imgPc: '/lp/img/job-2.png',
    imgSp: '/lp/img/sp/job-2-sp.png',
    salary: '38万円〜 + 賞与',
    area: '東京',
    description: '創業30年以上の老舗鮨店にて、副料理長として大将の右腕をお任せします。仕込み・握り・盛り付けなどの調理業務に加え、食材の発注管理や後輩職人の指導もご担当いただきます。伝統の技を受け継ぎながら、さらなる高みを目指したい方に最適な環境です。',
    skills: [
      '寿司職人としての実務経験3年以上',
      '刺身・握りの基本技術を習得済みであること',
      '食材の目利き・鮮度管理の知識',
      'チームワークを大切にできる方',
    ],
  },
  {
    id: 3,
    title: '大手企業の海外店舗の「スーシェフ候補」',
    imgPc: '/lp/img/job-3.png',
    imgSp: '/lp/img/sp/job-3-sp.png',
    salary: '80万円〜',
    area: 'アメリカ',
    description: '大手飲食グループが展開するニューヨークの高級鮨店にて、スーシェフとしてご活躍いただきます。現地シェフチームと連携しながら、本格江戸前鮨の技術を海外のお客様へ届けるやりがいのあるポジションです。渡航費・住居手当・ビザサポートあり。',
    skills: [
      '寿司職人としての実務経験5年以上',
      '英語での基本的なコミュニケーション力（日常会話レベル）',
      '海外勤務への意欲・異文化適応力',
      'おまかせコースの構成・提供経験があれば尚可',
    ],
  },
  {
    id: 4,
    title: 'SNSで話題のあのお店の「調理サポートスタッフ」',
    titleHtml: 'SNSで話題の<br />あのお店の「調理サポートスタッフ」',
    imgPc: '/lp/img/job-4.png',
    imgSp: '/lp/img/sp/job-4-sp.png',
    salary: '25万円〜',
    area: '東京',
    restDays: '週休3日',
    description: 'SNSで予約が殺到する話題の鮨店にて、調理補助スタッフを募集します。食材の下処理・仕込み・盛り付けの補助など、職人のサポート業務を中心にお任せします。未経験からでも丁寧に指導するので、寿司業界に飛び込みたい方にぴったりです。週休3日でプライベートも充実。',
    skills: [
      '飲食業界での勤務経験があれば尚可（未経験OK）',
      '寿司や和食に強い興味・関心がある方',
      '体力に自信がある方',
      '明るく元気な対応ができる方',
    ],
  },
];

export default function JobExampleSection() {
  const [selectedJob, setSelectedJob] = useState<JobExample | null>(null);

  const closeModal = useCallback(() => {
    setSelectedJob(null);
  }, []);

  useEffect(() => {
    if (!selectedJob) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedJob, closeModal]);

  return (
    <>
      <section className="l-section p-job">
        <div className="l-inner">
          <h2 className="c-heading --job">求人例</h2>
          <div className="p-job__boxes">
            {jobExamples.map((job) => (
              <button
                key={job.id}
                type="button"
                className="p-job__box"
                onClick={() => setSelectedJob(job)}
              >
                <div className="p-job__img">
                  <img className="u-pc" src={job.imgPc} alt="" />
                  <img className="u-sp" src={job.imgSp} alt="" />
                </div>
                <div className="p-job__contents">
                  <h3
                    className="p-job__title"
                    dangerouslySetInnerHTML={{ __html: job.titleHtml || job.title }}
                  />
                  <div className={job.restDays ? 'p-job__container' : undefined}>
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">月給</span>
                      <span className="p-job__text">{job.salary}</span>
                    </div>
                    {job.restDays && (
                      <div className="p-job__wrapper">
                        <span className="p-job__tag">休日</span>
                        <span className="p-job__text">{job.restDays}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="p-job__place">{job.area}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="p-job-modal" onClick={closeModal}>
          <div className="p-job-modal__overlay" />
          <div
            className="p-job-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="p-job-modal__close"
              onClick={closeModal}
              aria-label="閉じる"
            >
              &times;
            </button>

            <div className="p-job-modal__header">
              <span className="p-job-modal__area">{selectedJob.area}</span>
              <h3 className="p-job-modal__title">{selectedJob.title}</h3>
            </div>

            <div className="p-job-modal__body">
              <dl className="p-job-modal__dl">
                <dt className="p-job-modal__dt">エリア</dt>
                <dd className="p-job-modal__dd">{selectedJob.area}</dd>

                <dt className="p-job-modal__dt">給与</dt>
                <dd className="p-job-modal__dd">
                  月給 {selectedJob.salary}
                  {selectedJob.restDays && (
                    <span className="p-job-modal__sub">　休日: {selectedJob.restDays}</span>
                  )}
                </dd>

                <dt className="p-job-modal__dt">仕事内容</dt>
                <dd className="p-job-modal__dd">{selectedJob.description}</dd>

                <dt className="p-job-modal__dt">想定スキル</dt>
                <dd className="p-job-modal__dd">
                  <ul className="p-job-modal__skills">
                    {selectedJob.skills.map((skill) => (
                      <li key={skill} className="p-job-modal__skill">{skill}</li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </div>

            <div className="p-job-modal__footer">
              <a
                href="https://lin.ee/xHNQydj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-job-modal__apply"
              >
                この求人について相談する
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
