import Link from 'next/link';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '鮨を、再定義せよ。常識を壊す、世界初業態の旗振り役へ | 焼うおいし川 採用',
  description: '伝統を守るな、武器にしろ。100年の築地が生んだ「発明」で、世界のスタンダードを創る。職人からクリエイターへ。',
};

export default function YakuoIshikawaLP() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      {/* <ExitIntentPopup /> */}
      
      <main className="l-main">
        <div className="p-fv">
          <picture className="p-fv__img">
            <source media="(min-width: 768px)" srcSet="/lp/img/aozora_yakiuo.jpeg" />
            <img src="/lp/img/aozora_yakiuo_fv_sp.png" alt="焼うおいし川" width={390} height={848} />
          </picture>

          <div className="p-fv__text-wrapper p-fv__text-wrapper--4chars">
            <p className="p-fv__lead" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              <span className="--margin">
                <span className="p-fv__carrier-up">鮨</span>
                <span className="--space">を、</span>
              </span>
              <br />
              <span className="--margin">
                <span className="p-fv__carrier-up">再</span>
                <span className="p-fv__carrier-up">定</span>
                <span className="p-fv__carrier-up">義</span>
              </span><span className="--height">せよ。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              100年の築地が生んだ「発明」。<br />業界のルールは、俺たちが書き換えた。<br />伝統を守るな、武器にしろ。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              職人じゃない、クリエイターになれ。常識を壊す、世界初業態の旗振り役へ。
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
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>これは単なる飲食店じゃない。<br className="u-sp" />「発明」だ。</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              「肉を焼かない焼肉」として世界を驚かせた『焼うお いし川』。<br />
              <strong>これは、100年の歴史を持つ築地の魚問屋が、常識をぶち壊して生み出した「発明」だ。</strong><br /><br />
              お前に求めるのは、伝統を守ることじゃない。<br />
              <strong>伝統を武器に、新しいスタンダードを創ることだ。</strong><br /><br />
              国内外のメディアを席巻し、世界各地への展開を加速させるこの爆発力を、<br />
              お前のキャリアの追い風にしろ。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">「焼うお」という</span>
                  <span className="p-feature__heading-bottom">唯一無二の武器</span>
                </h3>
                <p className="p-feature__text --01">「鮨」の技術をベースに、エンターテインメント性を掛け合わせた新業態。国内外のメディアを席巻するこの爆発力を、お前のキャリアの追い風にしろ。1,000個以上のアイデアから生まれた、他のどこにもない「発明」を武器に戦え。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">世界各地への</span>
                  <span className="p-feature__heading-bottom">「侵略」</span>
                </h3>
                <p className="p-feature__text">現在、世界展開を加速中。マニュアルをなぞる仕事ではない。その土地の文化と「焼うお」を融合させる、最前線のクリエイティブな現場。世界のスタンダードを創る旗振り役として、お前が歴史を刻め。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">「職人」から</span>
                  <span className="p-feature__heading-bottom">「クリエイター」へ</span>
                </h3>
                <p className="p-feature__text --03">ただ握る、ただ切るだけではない。どうすればお客様を驚かせられるか、どうすれば世界一になれるか。脳をフル回転させる体育会系・実力主義。既存の枠に収まりたくない、トレンドの仕掛け人になりたいお前のための場所だ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>数字が証明する、爆発力</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>世界初</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>誰も見たことがない「発明」<br />常識をぶち壊した新業態</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.2rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>1,000個+</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>検証したアイデア数<br />10年の歳月の結晶</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>世界展開</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>加速する「侵略」<br />新スタンダード創造中</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>多数</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>国内外メディア席巻<br />トレンドを仕掛ける側</p>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="l-inner">
            <h2 className="c-heading --white" style={{ marginBottom: '3rem' }}>業界のルールは、俺たちが書き換えた。</h2>
            <div style={{ background: 'rgba(255,255,255,0.95)', padding: '3rem 2rem', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ fontSize: '1.1rem', lineHeight: '2.2', color: '#333' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  築地市場が豊洲に移転する——そんな話が出回っていた当時。<br />
                  築地が消滅する可能性があった。
                </p>
                <p style={{ marginBottom: '1.5rem', fontWeight: '600', color: '#c41e3a' }}>
                  「築地を盛り上げる名物を、俺が『発明』する。」
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  10年間、悩み続けた。世界中を飛び回り、<strong>1,000個以上</strong>のアイデアを検証した。<br />
                  どれも納得いかなかった。既存の延長線上にあるものは、作る意味がなかった。
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  上海、沖縄、名古屋——移住した先々で、文化が違えば食も変わる。<br />
                  その全てに対応できる「新しいスタンダード」を創りたかった。
                </p>
                <p style={{ fontWeight: '600', fontSize: '1.2rem', color: '#c41e3a', textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: '#fff5f5', borderRadius: '8px' }}>
                  「鮨」でも「焼肉」でもない——築地100年の伝統を武器に、常識をぶち壊した。<br />それが「焼うお いし川」だ。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">伝統を守るな、武器にしろ。<br />常識を壊す、クリエイターになれ。</p>
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
                <p className="p-case__heading">職人じゃない、<br className="u-pc" />クリエイターとして働ける</p>
                <p className="p-case__text">マニュアル通りの仕事じゃない。どう驚かせるか、どう文化と融合させるか、毎日が脳をフル回転させる刺激的な現場。お客様の「こんなの初めて！」という声が、自分のクリエイティブを証明する瞬間。メディア取材も多く、トレンドを「仕掛ける側」の快感がある。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />クリエイティブな現場</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />トレンドの仕掛け人</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />実力主義の環境</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社2年目 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">世界の「侵略」に<br className="u-pc" />最前線で参加できる</p>
                <p className="p-case__text">世界展開が加速中で、ただの現場作業じゃない。その土地の文化を理解し、「焼うお」を融合させる——それが俺たちの仕事。新店立ち上げ、海外進出、新メニュー開発。既存の枠に収まらない、世界のスタンダードを創る最前線。年齢や経験じゃない、アイデアと実力で勝負できる。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />世界展開の最前線</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />文化融合のクリエイティブ</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />実力で勝負できる</li>
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
                  <p className="p-faq__a">はい、クリエイティブな発想と実力主義の環境に挑戦したい意欲があれば歓迎します。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">「焼うお」とは？</p>
                  <p className="p-faq__a">築地100年の伝統を武器に、常識をぶち壊して生まれた「発明」です。鮨の技術×エンターテインメントの新業態。</p>
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
                  <p className="p-faq__a">既存の枠に収まりたくない、クリエイティブな仕事がしたい、トレンドの仕掛け人になりたい人。</p>
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
              <p className="p-footer-cta__text--sub">伝統を守るな、武器にしろ。職人じゃない、クリエイターになれ。</p>
              <p className="p-footer-cta__text--main">鮨を、再定義せよ。<br />常識を壊す、世界初業態の旗振り役へ。</p>
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
