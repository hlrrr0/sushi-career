import Link from 'next/link';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '未経験は、弱点じゃない。スタートラインだ | 築地青空三代目 採用',
  description: '自己負担0円で、一生モノの武器を授ける。リスクは会社が持つ。お前は情熱だけ持ってこい。未経験からミシュラン星へ。',
};

export default function TsukijiAozoraBeginnerLP() {
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
                <span className="p-fv__carrier-up">人</span>
                <span className="p-fv__carrier-up">生</span>
                <span className="--space">を</span>
              </span>
              <br /><span className="--height">変える。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              自己負担0円で、一生モノの武器を授ける。<br />リスクは会社が持つ。お前は情熱だけ持ってこい。<br />未経験は、弱点じゃない。新しい自分に出逢うための、スタートラインだ。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              道具も、教育も、場所も、すべて用意した。あとはお前の「やる気」だけだ。
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
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>未経験こそ、<br className="u-sp" />最大のチャンスだ。</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              「経験がない」「技術がない」「お金がない」<br />
              それ、全部、俺たちが解決する。<br /><br />
              <strong>お前が持ってくるのは、「やる気」だけでいい。</strong><br />
              100万円ほどかかる飲食人大学の学費、会社が全額負担。<br />
              創業100年の問屋直送ネタで、毎日が一流の修行。<br />
              未経験からミシュラン星獲得者まで輩出した実績。<br />
              リスクゼロで、お前の人生を変えるチャンスがここにある。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">学費全額負担</span>
                  <span className="p-feature__heading-bottom">数十万円の投資</span>
                </h3>
                <p className="p-feature__text --01">飲食人大学の授業料、数十万円を会社が全額投資。お前への「期待」の証だ。入社後すぐに3ヶ月間、プロの技術を科学的に学べる。「見て盗め」じゃない、体系的なカリキュラムで、未経験からでも確実に成長できる。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">未経験から</span>
                  <span className="p-feature__heading-bottom">ミシュラン星へ</span>
                </h3>
                <p className="p-feature__text">実際に、未経験から入社してミシュラン星を獲得した先輩がいる。総親方・前田康衛の直伝技術と、築地100年の目利き力。この最高の環境で学べば、お前も必ず一流になれる。未経験は弱点じゃない。むしろ、伸びしろだ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">魚問屋×寿司屋の</span>
                  <span className="p-feature__heading-bottom">最強の安定基盤</span>
                </h3>
                <p className="p-feature__text --03">創業100年の魚問屋がバックにある。だから、経営が安定している。だから、思い切った挑戦ができる。この盤石な基盤の上で、お前は失敗を恐れず、大胆に技術を磨ける。安心して、プロを目指せ。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>会社の本気の投資</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>数十万円</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>飲食人大学の学費を<br />全額会社負担</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>実績あり</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>未経験からミシュラン星<br />獲得者を輩出</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100年</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>創業からの歴史が<br />生む安定基盤</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>3ヶ月</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>寿司学校での<br />集中トレーニング</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">リスクゼロで、人生を変える。<br />その第一歩を、今ここから始めろ。</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <DeviceAwareLink 
              mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
              desktopUrl="/apply/tsukiji-aozora"
            >
              話を聞いてみる
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
                    <p className="p-flow__text">飲食人大学で修行（希望者）</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    希望者は入社後、3ヶ月間<br className="u-pc" />寿司学校で徹底指導!<br />学費は全額会社負担
                  </p>
                </div>
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280', marginTop: '2rem' }}>
              ※ 特別選考あり
            </p>
          </div>
        </section>

        <section className="l-section p-case">
          <div className="p-case__inner">
            <h2 className="c-heading --case">先輩職人の声</h2>
            <div className="p-case__boxes">
              <div className="p-case__box">
                <p className="p-case__heading">未経験でも、<br className="u-pc" />ここまで成長できた</p>
                <p className="p-case__text">魚を触ったこともない完全未経験からのスタート。でも3ヶ月の寿司学校で基礎を徹底的に学び、実践で腕を磨いた。学費を全額会社が負担してくれたから、金銭的な不安もなく挑戦できました。今では自信を持ってカウンターに立っています。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />完全未経験からスタート</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />学費全額負担で安心</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />1年でカウンター担当</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社2年目 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">会社の投資が、<br className="u-pc" />人生を変えてくれた</p>
                <p className="p-case__text">前職は全く違う業界。寿司職人になりたかったけど、学費がネックでした。ここは会社が全額負担してくれる。「お前に期待している」というメッセージが、本当に嬉しかった。今では、この決断が人生最高の選択だったと確信しています。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />異業種からの転職</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />金銭的リスクゼロ</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />人生が変わった</li>
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
                  <p className="p-faq__q">本当に未経験で大丈夫ですか？</p>
                  <p className="p-faq__a">はい、完全未経験でも大歓迎です。飲食人大学で基礎から丁寧に教えます。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">飲食人大学の学費は本当に無料？</p>
                  <p className="p-faq__a">はい、100万円ほどかかる学費を会社が全額負担します。お前への期待の証です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">学費を後で返済する必要は？</p>
                  <p className="p-faq__a">一切ありません。完全に会社の投資です。途中で辞めても返済義務はありません。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">どれくらいで一人前になれる？</p>
                  <p className="p-faq__a">3ヶ月の学校で基礎を習得後、実戦で腕を磨きます。意欲次第で1年目からカウンターも。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">異業種からでも大丈夫？</p>
                  <p className="p-faq__a">はい、多くの先輩が異業種から転職しています。やる気があれば問題ありません。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">未経験は、弱点じゃない。新しい自分に出逢うための、スタートラインだ。</p>
              <p className="p-footer-cta__text--main">道具も、教育も、場所も、すべて用意した。<br />お前は、「やる気」だけ持ってこい。</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <DeviceAwareLink 
                  mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
                  desktopUrl="/apply/tsukiji-aozora"
                >
                  話を聞いてみる
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
