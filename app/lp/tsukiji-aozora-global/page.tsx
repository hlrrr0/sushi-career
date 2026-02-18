import Link from 'next/link';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '築地で研ぎ、世界を斬る | 築地青空三代目 採用',
  description: '築地はゴールじゃない。世界へ出るための「本拠地」だ。創業100年の目利き技術と世界初業態「焼うおいし川」で、グローバルステージへ。',
};

export default function TsukijiAozoraGlobalLP() {
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
                <span className="p-fv__carrier-up">世</span>
                <span className="p-fv__carrier-up">界</span>
                <span className="--space">を</span>
              </span>
              <br /><span className="--height">制覇する。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              築地で研ぎ、世界を斬る。<br />お前の技術は、世界共通の言語になる。<br />日本に留まるな。世界を驚かせる覚悟はあるか。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              築地はゴールじゃない。世界へ出るための「本拠地」だ。
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
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>日本だけで<br className="u-sp" />満足するな。</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              ニューヨーク、パリ、シンガポール。世界中で寿司が求められる時代。<br />
              でも、本物の技を持つ職人は圧倒的に不足している。<br /><br />
              <strong>世界は、お前を待っている。</strong><br />
              創業100年の目利き技術。世界初業態「焼うおいし川」の革新的ノウハウ。<br />
              築地で磨いた技を武器に、世界中どこへでも羽ばたける。<br />
              日本代表として、世界を驚かせる準備はできているか。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">世界展開中の</span>
                  <span className="p-feature__heading-bottom">「焼うおいし川」</span>
                </h3>
                <p className="p-feature__text --01">世界初、炙り×寿司の革新業態。すでに国内外への出店を加速中。グローバル展開の最前線で、お前の技術と発想を試せる環境がここにある。築地で学び、世界で戦う。それが、お前のキャリアパスだ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">世界で通用する</span>
                  <span className="p-feature__heading-bottom">本物の技術</span>
                </h3>
                <p className="p-feature__text">創業100年の目利き。総親方・前田康衛の直伝技術。飲食人大学での科学的トレーニング。この完璧な基礎があるから、世界中どこへ行っても「日本の本物」として通用する。お前の武器は、世界標準だ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">海外出店の</span>
                  <span className="p-feature__heading-bottom">リーダーへの道</span>
                </h3>
                <p className="p-feature__text --03">ニューヨーク、パリ、アジア各国。次々と計画される海外展開のキーマンになれるチャンスがある。語学力がなくても大丈夫。本物の技術は、言葉の壁を超える。世界を舞台に、お前の名を刻め。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>世界で戦う実績</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>世界展開</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>国内外へ拡大中の<br />「焼うおいし川」</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100年</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>創業からの歴史と<br />世界で通用する目利き力</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>多数</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>ミシュラン星獲得者を<br />輩出する教育力</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100%</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>飲食人大学への<br />通学費用負担率</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">築地で研ぎ、世界を斬る。<br />その第一歩を、今ここから始めろ。</p>
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
                <p className="p-case__heading">世界展開の最前線で<br className="u-pc" />腕を磨く日々</p>
                <p className="p-case__text">「焼うおいし川」の海外展開プロジェクトに参加中。築地で学んだ技術が、こんなに早く世界で役立つとは思わなかった。日本の寿司文化を世界に広める仕事に誇りを持っています。次はニューヨークへの挑戦が待っています。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />海外展開プロジェクトに参加</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />世界で通用する技術習得</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />グローバルキャリアを実現</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社3年目 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">日本で磨いた技を<br className="u-pc" />世界で試せる環境</p>
                <p className="p-case__text">創業100年の歴史と、世界初業態を生み出す革新性。この両方があるから、伝統的な技術と新しい発想の両方が身につく。築地で学び、世界で戦う。こんな贅沢なキャリアパスは他にないと思います。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />伝統と革新の両立</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />世界を見据えたキャリア</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />グローバル人材として成長</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社2年目 / 20代 / 男性</p>
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
                  <p className="p-faq__q">海外展開にはどう関われますか？</p>
                  <p className="p-faq__a">意欲と実力次第で、海外店舗の立ち上げメンバーや現地責任者として活躍できます。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">英語ができなくても大丈夫？</p>
                  <p className="p-faq__a">はい。本物の技術は言葉の壁を超えます。必要なら語学サポートも提供します。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">未経験でも応募できますか？</p>
                  <p className="p-faq__a">はい、大歓迎です。飲食人大学で基礎から学び、世界で通用する技術を習得できます。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">どの国への展開を予定していますか？</p>
                  <p className="p-faq__a">ニューヨーク、パリ、アジア各国への出店を計画中。世界中が舞台です。</p>
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
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">日本代表として、世界を驚かせる覚悟はあるか。</p>
              <p className="p-footer-cta__text--main">ニューヨークで、パリで、アジアで。<br />お前の名を、世界に刻む準備はできたか。</p>
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
