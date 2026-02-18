import Link from 'next/link';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '型にはまるな。魂を磨け | 築地青空三代目 採用',
  description: '髪型・ひげ自由。見た目じゃなく、中身で勝負したいプロを募集。必要なのは「ガッツ」だけ。本質で勝負する職人の世界へ。',
};

export default function TsukijiAozoraFreedomLP() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      
      <main className="l-main">
        <div className="p-fv">
          <picture className="p-fv__img">
            <source media="(min-width: 768px)" srcSet="/lp/img/aozora_fv.jpeg" />
            <img src="/lp/img/aozora_fv_sp.jpeg" alt="築地青空三代目" width={390} height={848} />
          </picture>

          <div className="p-fv__text-wrapper p-fv__text-wrapper--4chars">
            <p className="p-fv__lead" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              <img src="/lp/img/fv-text.svg" alt="寿司職人" />で、<br />
              <span className="--margin">
                <span className="p-fv__carrier-up">自</span>
                <span className="p-fv__carrier-up">分</span>
                <span className="--space">らしく</span>
              </span>
              <br /><span className="--height">戦え。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              型にはまるな。魂を磨け。<br />髪型・ひげ自由。必要なのは「ガッツ」だけだ。<br />見た目じゃなく、中身で勝負したいプロを募集する。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              坊主にする暇があるなら、一刻も早く魚を捌け。
            </p>
            <div className="c-button">
              <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
              <DeviceAwareLink 
                mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                desktopUrl="/apply/tsukiji-aozora"
              >
                話を聞いてみる
              </DeviceAwareLink>
            </div>
          </div>
        </div>

        <section className="p-feature">
          <div className="l-inner">
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>形式じゃなく、<br className="u-sp" />本質で勝負しろ。</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              髪型がどうとか、ひげがどうとか。<br />
              そんなくだらない「形」で人を判断する時代は、もう終わった。<br /><br />
              <strong>俺たちが見るのは、お前の「気合」と「技術」だけだ。</strong><br />
              パリッとした体育会系の組織。でも、外見のルールはゼロ。<br />
              お客様を感動させる情熱があれば、見た目は自由だ。<br />
              本気で仕事をする。それがすべて。それがプロの条件だ。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">髪型・ひげ・ピアス</span>
                  <span className="p-feature__heading-bottom">すべて自由</span>
                </h3>
                <p className="p-feature__text --01">坊主強制？ナンセンスだ。髪型やひげ、ピアスで人を判断しない。大事なのは、お前が握る寿司の味と、お客様への心意気。外見の自由を保証する代わりに、プロの仕事を求める。それが俺たちのスタイルだ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">パリッとガッツのある</span>
                  <span className="p-feature__heading-bottom">体育会系組織</span>
                </h3>
                <p className="p-feature__text">自由だからって、ぬるい環境じゃない。朝は早いし、修行は厳しい。でもそれは、お前を本物のプロにするため。パリッとした雰囲気の中で、ガッツを持った仲間たちと切磋琢磨する。それが俺たちの流儀だ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">個性を活かす</span>
                  <span className="p-feature__heading-bottom">本物の技術</span>
                </h3>
                <p className="p-feature__text --03">飲食人大学での科学的トレーニング。創業100年の伝統技術。世界初業態の革新性。この完璧な環境で、お前の個性を武器に変えろ。型にはまらないお前だからこそ、新しい寿司の可能性を切り拓ける。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>本質で勝負する環境</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>完全自由</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>髪型・ひげ・ピアス<br />すべて自由</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100%</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>実力主義の<br />評価制度</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>多数</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>個性派の先輩職人が<br />活躍中</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100%</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>飲食人大学への<br />通学費用負担率</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">見た目じゃなく、中身で勝負しろ。<br />お前の本気を、築地で証明してみせろ。</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <DeviceAwareLink 
              mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
              desktopUrl="/apply/tsukiji-aozora"
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
                    <p className="p-flow__text">飲食人大学で修行</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    入社後、3ヶ月間<br className="u-pc" />寿司学校で徹底指導!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section p-case">
          <div className="p-case__inner">
            <h2 className="c-heading --case">先輩職人の声</h2>
            <div className="p-case__boxes">
              <div className="p-case__box">
                <p className="p-case__heading">外見自由でも、<br className="u-pc" />プロ意識は超一流</p>
                <p className="p-case__text">髪を伸ばしたまま入社。最初は不安もあったけど、「技術と気合があればいい」という言葉通りの環境でした。見た目の自由がある分、仕事では全力で結果を出す。そういうメリハリが、逆にプロ意識を高めてくれています。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />自分らしいスタイルで勤務</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />実力主義の評価</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />本質で勝負できる環境</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社2年目 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">形式にこだわらない<br className="u-pc" />本気の職人集団</p>
                <p className="p-case__text">「古い慣習」に縛られない環境を探していました。ここでは外見の自由がある一方で、仕事への姿勢は超厳格。でもそれが心地いい。本気で技術を磨きたい人間だけが集まる、本物のプロ集団です。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />個性を尊重する文化</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />厳しくも温かい指導</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />本気の仲間と切磋琢磨</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社1年目 / 20代 / 男性</p>
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
                  <p className="p-faq__q">本当に髪型自由ですか？</p>
                  <p className="p-faq__a">はい、完全に自由です。髪型、ひげ、ピアス、すべてOK。大切なのは技術と情熱です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">体育会系って厳しいですか？</p>
                  <p className="p-faq__a">パリッとした雰囲気ですが、理不尽なパワハラはゼロ。本気で成長したい人には最高の環境です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">未経験でも応募できますか？</p>
                  <p className="p-faq__a">はい、大歓迎です。飲食人大学で基礎から学べます。必要なのはガッツだけ。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">飲食人大学の学費は本当に無料？</p>
                  <p className="p-faq__a">はい、数十万円かかる学費を会社が全額負担します。あなたへの期待の証です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">個性的な人が多いですか？</p>
                  <p className="p-faq__a">個性豊かな仲間が多数活躍中。でも全員に共通するのは、プロとしての強い覚悟です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">見た目じゃなく、中身で勝負したいプロを募集する。</p>
              <p className="p-footer-cta__text--main">形式にとらわれるな。本質で戦え。<br />お前の「本気」を、築地で証明しろ。</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <DeviceAwareLink 
                  mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  desktopUrl="/apply/tsukiji-aozora"
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
