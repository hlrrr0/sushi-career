import Link from 'next/link';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '築地から世界へ。日本伝統食の進化に生きる | 築地青空三代目グループ 採用',
  description: '正統派江戸前寿司、世界初の焼うお。創業20年の伝統と革新を、複数業態で展開する築地青空三代目グループで、お前のキャリアを築け。',
};

export default function AllBrandsLP() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      {/* <ExitIntentPopup /> */}
      
      <main className="l-main">
        <div className="p-fv">
          <picture className="p-fv__img">
            <source media="(min-width: 768px)" srcSet="/lp/img/aozora_fv.jpeg" />
            <img src="/lp/img/aozora_fv_sp.jpeg" alt="築地青空三代目グループ" width={390} height={848} />
          </picture>

          <div className="p-fv__text-wrapper p-fv__text-wrapper--4chars">
            <p className="p-fv__lead" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              <span className="--margin">
                <span className="p-fv__carrier-up">築</span>
                <span className="p-fv__carrier-up">地</span>
                <span className="--space">から</span>
              </span>
              <br />
              <span className="--margin">
                <span className="p-fv__carrier-up">世</span>
                <span className="p-fv__carrier-up">界</span>
                <span className="p-fv__carrier-up">へ</span>
                <span className="--space">。</span>
              </span>
              <br /><span className="--height">伝統と革新を、共に。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              正統派江戸前寿司、世界初の焼うお。<br />築地青空三代目グループで、<br />日本伝統食の進化に携われ。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              お前の情熱を、築地から世界へ届けろ。
            </p>
            <div className="c-button">
              <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
              <DeviceAwareLink 
                mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                desktopUrl="/apply/all-brands"
              >
                話を聞いてみる
              </DeviceAwareLink>
            </div>
          </div>
        </div>

        <section className="p-feature">
          <div className="l-inner">
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>築地青空三代目グループとは</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              築地で誕生、創業20年の正統派江戸前寿司の老舗『築地青空三代目』。<br />
              そして創業者が10年の歳月をかけて世に出した<br />
              <strong>「業界史上初」「世界初業態」</strong>の『焼うおいし川』。<br /><br />
              この2業種を主力に、ふぐ、焼肉など複数業態を運営。<br />
              <strong>日本伝統食の進化</strong>に挑み続けるグループです。<br />
              アットホームな職場環境で、あらゆる事を学んでいただけます。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">伝統と革新</span>
                  <span className="p-feature__heading-bottom">両方を学べる</span>
                </h3>
                <p className="p-feature__text --01">正統派江戸前寿司で伝統的な技術を習得し、世界初業態の焼うおで革新的な料理スタイルを経験。一つのグループで、日本料理の「過去」と「未来」の両方に触れられる、他にはない環境がここにある。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">全国・海外展開</span>
                  <span className="p-feature__heading-bottom">拡大期のチャンス</span>
                </h3>
                <p className="p-feature__text">焼うおいし川を中心に、全国・世界各地への出店が加速中。拡大期だからこそ、若手にもチャンスが豊富。新店立ち上げ、海外赴任、マネジメント。ワクワクするスピード感で、お前のキャリアも急成長させられる。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">充実の教育制度</span>
                  <span className="p-feature__heading-bottom">本気で育てる</span>
                </h3>
                <p className="p-feature__text --03">寿司業態なら飲食人大学（学費全額負担）、他業態ならOJT形式の丁寧な研修。「見て盗め」ではなく「科学的に、体系的に学ぶ」。総親方や経験豊富な先輩たちが、お前を一流の料理人へと導く。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section" style={{ padding: '5rem 0', background: '#fafafa' }}>
          <div className="l-inner">
            <h2 className="c-heading" style={{ marginBottom: '4rem' }}>グループの業態紹介</h2>
            <div style={{ display: 'grid', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
              
              {/* 築地青空三代目 */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '3rem 2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: '#c41e3a', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                      寿司業態
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                      築地青空三代目
                    </h3>
                  </div>
                  <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#4b5563', marginBottom: '1.5rem' }}>
                    築地で誕生、創業20年の正統派江戸前寿司の老舗。100年の歴史を持つ問屋直送の最高級ネタを扱い、総親方・前田康衛の直伝で伝統的な技術を習得。入社後は飲食人大学（3ヶ月、学費全額会社負担）で基礎を科学的に学び、実戦で腕を磨く。24歳の板長誕生など、実力主義で若手を抜擢。
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      ミシュラン星輩出
                    </span>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      学費全額負担
                    </span>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      若手抜擢文化
                    </span>
                  </div>
                </div>
              </div>

              {/* 焼うおいし川 */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '3rem 2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: '#c41e3a', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                      焼うお業態
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                      焼うおいし川
                    </h3>
                  </div>
                  <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#4b5563', marginBottom: '1.5rem' }}>
                    創業者が10年の歳月をかけて生み出した「業界史上初」「世界初業態」。肉を焼かない焼肉として、魚を鉄板で焼いて提供する革命的スタイル。多数メディア掲載の大繁盛店で、現在全国・世界各地への出店が加速中。新店立ち上げ、海外展開など、拡大期だからこそ味わえるスピード感とチャンスが豊富。
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      世界初業態
                    </span>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      海外展開中
                    </span>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      メディア多数掲載
                    </span>
                  </div>
                </div>
              </div>

              {/* その他業態 */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '3rem 2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: '#c41e3a', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                      その他業態
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                      焼きふぐ・焼肉など
                    </h3>
                  </div>
                  <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#4b5563', marginBottom: '1.5rem' }}>
                    グループ内には、焼きふぐや焼肉など、高級食材を扱う業態も展開。魚から肉まで、幅広い食材の調理技術を習得可能。業態間の異動も柔軟で、マルチなスキルを持つ料理人として成長できる環境。将来の独立や新業態開発にも活きる、多様な経験が積める。
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      高級食材
                    </span>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      多様なスキル習得
                    </span>
                    <span style={{ background: '#fef2f2', color: '#c41e3a', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                      業態間異動可能
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="l-section p-job" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --white" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>グループの実績</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2.5rem 1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>20年</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>築地で愛され続けた<br />正統派寿司の伝統</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2.5rem 1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>世界初</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>業界史上初・世界初業態<br />焼うおいし川</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2.5rem 1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>全国・海外</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>拡大中のグループ<br />世界各地への出店加速</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2.5rem 1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>多数</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>ミシュラン星獲得者輩出<br />メディア掲載多数</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">伝統を守り、革新を起こす。<br />その両方に挑戦できるのは、ここだけだ。</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <DeviceAwareLink 
              mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
              desktopUrl="/apply/all-brands"
            >
              応募する
            </DeviceAwareLink>
          </div>
        </section>

        <section className="l-section p-flow">
          <div className="l-inner p-flow__inner">
            <h2 className="c-heading --white">
              応募から入社までの流れ
            </h2>
            <div className="p-flow__steps">
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">01</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">応募</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon1.png" alt="登録" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon1-sp.png" alt="登録" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">02</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">書類選考</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon2.png" alt="カウンセリング" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon2-sp.png" alt="カウンセリング" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">03</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">一次面接</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon3.png" alt="応募" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon3-sp.png" alt="応募" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">04</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text u-pc">
                      最終面接
                    </p>
                    <p className="p-flow__text u-sp">
                      最終面接（創業社長）
                    </p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon4.png" alt="サポート" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon4-sp.png" alt="サポート" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">05</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">
                      内定・入社
                    </p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon5.png" alt="握手" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon5-sp.png" alt="握手" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-dash-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">06</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow-dash.svg" alt="" />
                    </div>
                    <p className="p-flow__text">配属・研修開始</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    希望や適性に応じて配属先決定。<br className="u-pc" />充実の研修でスタート！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section p-case">
          <div className="p-case__inner">
            <h2 className="c-heading --case">先輩スタッフの声</h2>
            <div className="p-case__boxes">
              <div className="p-case__box">
                <p className="p-case__heading">伝統の寿司で基礎を学び、<br className="u-pc" />革新の焼うおで視野を広げた</p>
                <p className="p-case__text">築地青空三代目で寿司の伝統技術を3年学んだ後、焼うおいし川へ異動。同じ魚でも、全く違うアプローチで調理する面白さを発見しました。一つのグループで「守るべき伝統」と「壊すべき常識」の両方を経験できるのは、本当に貴重。今では両業態のトレーナーを務めています。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />伝統と革新の両方を経験</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />業態間の自由な異動</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />トレーナーに昇格</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社5年目 / 30代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">未経験から入社して、<br className="u-pc" />今では店長として活躍中</p>
                <p className="p-case__text">飲食業界未経験で入社しました。最初は不安でしたが、アットホームな職場環境と丁寧なOJT研修のおかげで、基礎から学べました。拡大期だからこそ若手にもチャンスがあり、入社3年目で店長に。グループ全体で学び合う文化があるので、困った時はすぐに相談できます。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />未経験から店長に</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />アットホームな環境</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />若手抜擢の文化</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">店長 / 20代 / 女性</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section p-faq">
          <div className="l-inner">
            <h2 className="c-heading --faq">よくある質問</h2>
            <div className="p-faq__contents">
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">未経験でも応募できますか？</p>
                  <p className="p-faq__a">はい、未経験でも大歓迎です。業態に応じて飲食人大学やOJT研修で丁寧に指導します。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">どの業態に配属されますか？</p>
                  <p className="p-faq__a">面接でのご希望や適性を考慮して決定します。入社後の業態間異動も可能です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">寿司学校の学費は本当に無料？</p>
                  <p className="p-faq__a">はい、寿司業態配属の場合、飲食人大学の学費（数十万円）を会社が全額負担します。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">海外勤務のチャンスはありますか？</p>
                  <p className="p-faq__a">はい、焼うおいし川を中心に海外展開中です。意欲次第で海外店舗への挑戦も可能です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">独立支援制度はありますか？</p>
                  <p className="p-faq__a">はい、のれん分け制度があります。独立後ミシュラン星を獲得した卒業生も多数います。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">日本伝統食の進化に、お前も参加しろ。</p>
              <p className="p-footer-cta__text--main">築地から世界へ。<br />伝統と革新を、共に創り上げろ。</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <DeviceAwareLink 
                  mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  desktopUrl="/apply/all-brands"
                >
                  応募する
                </DeviceAwareLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="l-footer p-footer">
        <div className="p-footer__inner">
          <div className="p-footer__left">
            <div className="p-footer__info">
              <div className="p-footer__button">
                <a href="/contact" className="p-footer__link">お問い合わせ</a>
              </div>
            </div>
          </div>
          <div className="p-footer__right">
            <ul className="p-footer__list">
              <li className="p-footer__item"><Link href="/terms">利用規約</Link></li>
              <li className="p-footer__item"><Link href="/privacy">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="p-footer__copyright">
          <small className="u-pc">copyright &copy; 鮨キャリ, all rights reserved.</small>
          <small className="u-sp">copyright<br />&copy; 鮨キャリ, all rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
