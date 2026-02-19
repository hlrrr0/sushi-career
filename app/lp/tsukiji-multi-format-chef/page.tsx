import Link from 'next/link';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '一つの技術に縛られるな。全業態を極めろ | 築地青空三代目グループ 採用',
  description: '正統派江戸前寿司、世界初の焼うお、ふぐ、焼肉。複数業態を渡り歩き、料理人としての引き出しを圧倒的に増やせ。',
};

export default function MultiFormatChefLP() {
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
                <span className="p-fv__carrier-up">一</span>
                <span className="p-fv__carrier-up">つ</span>
                <span className="--space">に</span>
              </span>
              <br />
              <span className="--margin">
                <span className="p-fv__carrier-up">縛</span>
                <span className="p-fv__carrier-up">ら</span>
                <span className="p-fv__carrier-up">れ</span>
                <span className="p-fv__carrier-up">る</span>
                <span className="--space">な。</span>
              </span>
              <br /><span className="--height">全業態を、極めろ。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              寿司、焼うお、ふぐ、焼肉。<br />築地青空三代目グループで、<br />料理人としての引き出しを爆増させろ。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              一つの業態に居続けるのは、成長の放棄だ。
            </p>
            <div className="c-button">
              <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
              <DeviceAwareLink 
                mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                desktopUrl="/apply/multi-format"
              >
                話を聞いてみる
              </DeviceAwareLink>
            </div>
          </div>
        </div>

        <section className="p-feature">
          <div className="l-inner">
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>専門性より、<br className="u-sp" />多様性で勝負しろ。</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              一つの業態を10年やるより、<br />
              3つの業態を3年ずつやった料理人の方が、市場価値は高い。<br /><br />
              <strong>江戸前寿司の伝統</strong>、<strong>世界初業態の革新</strong>、<strong>高級食材の扱い</strong>。<br />
              築地青空三代目グループだから実現できる、<br />
              業態を横断したキャリアパスで、お前を「どこでも通用する料理人」に。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">正統派江戸前寿司</span>
                  <span className="p-feature__heading-bottom">築地青空三代目</span>
                </h3>
                <p className="p-feature__text --01">創業20年の老舗で、伝統的な江戸前寿司の技術を学ぶ。築地直送の最高級ネタを毎日扱い、総親方から直接指導を受ける。飲食人大学での3ヶ月研修（学費全額負担）で基礎を固め、実戦で腕を磨く。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">世界初の革新業態</span>
                  <span className="p-feature__heading-bottom">焼うおいし川</span>
                </h3>
                <p className="p-feature__text">創業者が10年かけて生み出した「肉を焼かない焼肉」。魚を鉄板で焼く、誰も見たことがない料理スタイル。多数メディア掲載、全国・海外展開中の拡大期。新店舗立ち上げなど、スピード感あふれる経験が積める。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">高級食材の調理技術</span>
                  <span className="p-feature__heading-bottom">ふぐ、焼肉も展開</span>
                </h3>
                <p className="p-feature__text --03">グループ内には、焼きふぐや焼肉業態も。高単価食材の仕込み、調理、提供まで一気通貫で学べる。業態間を横断することで、魚、肉、調理法の幅広い知識と技術を習得。どの店でも通用する料理人に成長できる。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>業態横断型キャリアパス</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>複数業態</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>寿司、焼うお、ふぐ、焼肉<br />業態間を自由に異動可能</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100%</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>寿司業態なら飲食人大学<br />学費全額会社負担</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>全国・海外</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>拡大中のグループ<br />多様なキャリア選択肢</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.2rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>アットホーム</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>OJT形式の丁寧な指導<br />学びやすい職場環境</p>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="l-inner">
            <h2 className="c-heading --white" style={{ marginBottom: '3rem' }}>こんなキャリアが描ける</h2>
            <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#c41e3a', marginBottom: '1rem' }}>
                  パターン1：寿司職人から世界へ
                </div>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
                  <strong>1年目:</strong> 飲食人大学（3ヶ月）→ 築地青空三代目で寿司の基礎<br />
                  <strong>2-3年目:</strong> カウンター担当、板長補佐<br />
                  <strong>4年目:</strong> 焼うおいし川の新店立ち上げメンバーとして参加<br />
                  <strong>5年目:</strong> 海外店舗へ異動、店長として活躍
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#c41e3a', marginBottom: '1rem' }}>
                  パターン2：複数業態を経験してマルチプレイヤーに
                </div>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
                  <strong>1年目:</strong> 焼うおいし川でOJT研修、接客・調理の基礎<br />
                  <strong>2年目:</strong> 焼きふぐ業態へ異動、高級食材の扱いを習得<br />
                  <strong>3年目:</strong> 築地青空三代目で寿司技術を学ぶ<br />
                  <strong>4-5年目:</strong> マルチスキルを活かし、新業態開発チームに参加
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.95)', padding: '2rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#c41e3a', marginBottom: '1rem' }}>
                  パターン3：独立を目指す
                </div>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
                  <strong>1-3年目:</strong> 複数業態で調理・仕込み・接客を学ぶ<br />
                  <strong>4-5年目:</strong> 店長として店舗経営を経験<br />
                  <strong>6年目:</strong> 独立支援制度を活用し、のれん分け独立<br />
                  → 実際に独立後ミシュラン星を獲得した卒業生も多数
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">一つに縛られず、全てを学べ。<br />それが、築地青空三代目グループだ。</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <DeviceAwareLink 
              mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
              desktopUrl="/apply/multi-format"
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
                    <p className="p-flow__text">配属・研修スタート</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    希望や適性に応じて配属先を決定。<br className="u-pc" />丁寧な研修でスタート！
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
                <p className="p-case__heading">寿司から焼うおへ。<br className="u-pc" />業態異動で視野が一気に広がった</p>
                <p className="p-case__text">最初は築地青空三代目で寿司を3年学びました。その後、焼うおいし川の新店立ち上げメンバーとして異動。寿司で学んだ魚の知識が、鉄板焼きでも活きています。一つの業態だけでは見えなかった料理の奥深さを実感。今は両方の店舗でトレーナーとして活躍しています。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />業態間の自由な異動</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />スキルの相乗効果</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />マルチなキャリア形成</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社5年目 / 30代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">複数業態を経験して、<br className="u-pc" />独立の夢が具体的になった</p>
                <p className="p-case__text">焼うお、ふぐ、寿司と3つの業態を経験。それぞれで仕込み、調理、接客、店舗運営まで学べたおかげで、独立後に何をやりたいか明確になりました。今は店長として数字管理も任されていて、経営の勉強もできています。将来は自分の店を持ちたいです。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />3業態を経験</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />店舗運営まで学べる</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />独立支援制度あり</li>
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
                  <p className="p-faq__a">はい、未経験でも大歓迎です。配属先の業態に応じて丁寧に研修します。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">最初の配属先はどう決まりますか？</p>
                  <p className="p-faq__a">面接でのご希望や適性を考慮して決定します。入社後の異動も相談可能です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">業態間の異動は自由ですか？</p>
                  <p className="p-faq__a">はい、キャリア希望や成長に応じて業態間の異動が可能です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">独立支援制度はありますか？</p>
                  <p className="p-faq__a">はい、のれん分け制度があります。実際に独立後ミシュラン星を獲得した先輩も多数います。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">海外勤務のチャンスは？</p>
                  <p className="p-faq__a">焼うおいし川を中心に海外展開中です。意欲次第で海外店舗への挑戦も可能です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">専門性より、多様性。一つに縛られるな。</p>
              <p className="p-footer-cta__text--main">複数業態を渡り歩き、<br />「どこでも通用する料理人」になれ。</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <DeviceAwareLink 
                  mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  desktopUrl="/apply/multi-format"
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
