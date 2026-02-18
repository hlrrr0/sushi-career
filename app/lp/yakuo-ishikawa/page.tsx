import Link from 'next/link';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '世界初業態「肉を焼かない焼肉」で、世界を驚かせろ | 焼うおいし川 採用',
  description: '築地発、10年の歳月をかけて誕生した革命的業態。魚を鉄板で焼く、誰も見たことがない焼肉。多数メディア掲載、全国・海外展開中。拡大期だからこそのチャンスを掴め。',
};

export default function YakuoIshikawaLP() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      {/* <ExitIntentPopup /> */}
      
      <main className="l-main">
        <div className="p-fv">
          <picture className="p-fv__img">
            <source media="(min-width: 768px)" srcSet="/lp/img/aozora_fv.jpeg" />
            <img src="/lp/img/aozora_fv_sp.jpeg" alt="焼うおいし川" width={390} height={848} />
          </picture>

          <div className="p-fv__text-wrapper p-fv__text-wrapper--4chars">
            <p className="p-fv__lead" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              <span className="--margin">
                <span className="p-fv__carrier-up">世</span>
                <span className="p-fv__carrier-up">界</span>
                <span className="p-fv__carrier-up">初</span>
                <span className="--space">の</span>
              </span>
              <br />
              <span className="--margin">
                <span className="p-fv__carrier-up">革</span>
                <span className="p-fv__carrier-up">命</span>
              </span>に、<br />
              <span className="--height">お前も参加しろ。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              「肉を焼かない焼肉」焼うおいし川。<br />築地発、10年の歳月をかけて生まれた、<br />誰も見たことがない、魚の鉄板焼き。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              全国・海外展開中。今、このビッグウェーブに乗れ。
            </p>
            <div className="c-button">
              <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
              <DeviceAwareLink 
                mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                desktopUrl="/apply/yakuo-ishikawa"
              >
                話を聞いてみる
              </DeviceAwareLink>
            </div>
          </div>
        </div>

        <section className="p-feature">
          <div className="l-inner">
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>「肉を焼かない焼肉」が、<br className="u-sp" />世界を変える。</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              創業者が10年の歳月をかけて、築地から世界へ問う。<br />
              <strong>「業界史上初」「世界初業態」</strong>として、国内外から大きな賞賛。<br /><br />
              魚を鉄板で焼く。寿司でもない、焼肉でもない。<br />
              この革命的な料理スタイルを、世界中に届けるメンバーを募集する。<br />
              <strong>多数のメディア掲載、大繁盛店。そして今、拡大期真っ只中。</strong>
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">世界初業態</span>
                  <span className="p-feature__heading-bottom">革命の最前線</span>
                </h3>
                <p className="p-feature__text --01">「肉を焼かない焼肉」。魚を鉄板で焼いて提供する、誰も見たことがないスタイル。創業者が1,000個以上のアイデアを経て、10年かけて完成させた。国内外から賞賛される革命的業態の立ち上げメンバーとして、歴史を刻め。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">全国・海外展開</span>
                  <span className="p-feature__heading-bottom">加速する出店ペース</span>
                </h3>
                <p className="p-feature__text">築地から始まり、今や全国、そして世界各地への出店が加速中。拡大期だからこそ、多くの優秀な人材を募集している。新店舗の立ち上げ、海外進出、マネジメント。ワクワクするスピード感の中で、お前のキャリアも爆速成長させろ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">多数メディア掲載</span>
                  <span className="p-feature__heading-bottom">大繁盛店の証明</span>
                </h3>
                <p className="p-feature__text --03">革新的業態として、多数のメディアで紹介され続ける大繁盛店。築地の伝統的な魚を新しい形で提供し、築地を盛り上げる。日本伝統食の進化に携わり、これからの日本料理文化を創造する。その最前線で、お前も戦え。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>数字で見る、焼うおいし川</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>世界初</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>業界史上初・世界初業態<br />「肉を焼かない焼肉」</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>10年</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>創業者が歳月をかけて<br />開発した革新的業態</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>全国・海外</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>拡大中のスピード感<br />世界各地への出店加速</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>多数</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>メディア掲載・紹介多数<br />注目度抜群の大繁盛店</p>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="l-inner">
            <h2 className="c-heading --white" style={{ marginBottom: '3rem' }}>10年の歳月が生んだ、革命</h2>
            <div style={{ background: 'rgba(255,255,255,0.95)', padding: '3rem 2rem', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ fontSize: '1.1rem', lineHeight: '2.2', color: '#333' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  築地市場が豊洲に移転する——そんな話が出回っていた当時。<br />
                  築地が消滅する可能性があった。
                </p>
                <p style={{ marginBottom: '1.5rem', fontWeight: '600', color: '#c41e3a' }}>
                  「築地を盛り上げる名物を、俺が作る。」
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  築地青空三代目を営んでから、10年間ずっと悩み続けた。<br />
                  日本国内や海外に移住し、ビジネスアイデアを<strong>1,000個以上</strong>考えたが、どれも納得いかなかった。
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  上海、沖縄、名古屋——移住した先々で食べているものが変わっていることに気づいた。<br />
                  その3つを一緒に楽しめる業態を考えた時、沖縄の北谷で自身が営んでいた焼肉屋「北谷龍」からヒントを見つけた。
                </p>
                <p style={{ fontWeight: '600', fontSize: '1.2rem', color: '#c41e3a', textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: '#fff5f5', borderRadius: '8px' }}>
                  場所を問わず鮨が楽しめる「肉を焼かない焼肉」が、ここに誕生した。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">革命は、築地から始まる。<br />世界を驚かせる最前線に、今すぐ立て。</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <DeviceAwareLink 
              mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
              desktopUrl="/apply/yakuo-ishikawa"
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
                    <p className="p-flow__text">OJT研修スタート</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    入社後、アットホームな環境で<br className="u-pc" />OJT形式の研修を実施!
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
                <p className="p-case__heading">世界初業態の立ち上げに<br className="u-pc" />関われる刺激的な毎日</p>
                <p className="p-case__text">誰も見たことがない料理スタイルだから、毎日が発見の連続。お客様の「これ、すごいね！」という驚きの声が、仕事のやりがいに直結しています。メディア取材も多く、自分たちが歴史を作っている実感があります。拡大期だから新店舗も続々とオープン予定で、キャリアの選択肢も広がります。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />世界初業態の最前線</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />メディア掲載多数の注目度</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />新店舗続々オープン予定</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社2年目 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">拡大期だからこそ、<br className="u-pc" />若手にもチャンスがある環境</p>
                <p className="p-case__text">全国・海外展開が加速しているので、スピード感がすごいです。新店舗の立ち上げメンバーとして参加したり、トレーナーとして新人教育に携わったり。普通なら何年もかかるポジションに、入社数年で挑戦できる。アットホームな職場で、先輩たちが丁寧にOJTで教えてくれるので、未経験でも安心でした。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />拡大期のスピード感</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />若手への抜擢文化</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />OJTで丁寧に指導</li>
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
                  <p className="p-faq__q">料理未経験でも応募できますか？</p>
                  <p className="p-faq__a">はい、未経験でも大歓迎です。OJT形式で丁寧に指導しますので、ご安心ください。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">「肉を焼かない焼肉」とは？</p>
                  <p className="p-faq__a">魚を鉄板で焼いて提供する、世界初の業態です。寿司でも焼肉でもない、革新的なスタイルです。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">海外勤務のチャンスはありますか？</p>
                  <p className="p-faq__a">はい、世界各地への出店が加速中です。意欲次第で海外店舗への挑戦も可能です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">どんな人材を求めていますか？</p>
                  <p className="p-faq__a">革新的な業態に挑戦する意欲、向上心、チームワークを大切にできる方を歓迎します。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">キャリアアップの機会は？</p>
                  <p className="p-faq__a">拡大期なので、店長、トレーナー、新店立ち上げなど、様々なキャリアパスがあります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">築地から世界へ。革命の最前線で、お前の人生を賭けろ。</p>
              <p className="p-footer-cta__text--main">世界初業態「肉を焼かない焼肉」。<br />この歴史的瞬間に、立ち会え。</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <DeviceAwareLink 
                  mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  desktopUrl="/apply/yakuo-ishikawa"
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
