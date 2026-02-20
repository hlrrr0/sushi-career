import Link from 'next/link';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '「下積み10年」を、3ヶ月でショートカットしろ | 築地青空三代目 採用',
  description: '入社即、寿司学校へ。学費全額会社負担。「見て盗め」ではなく「科学的に学ぶ」。築地100年の歴史と最先端の技術で、最短で一流の寿司職人に。',
};

export default function TsukijiAozoraLP() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      {/* <ExitIntentPopup /> */}
      
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
                <span className="p-fv__carrier-up">爆</span>
                <span className="p-fv__carrier-up">速</span>
                <span className="p-fv__carrier-up">成</span>
                <span className="p-fv__carrier-up">長</span>
                <span className="--space">を</span>
              </span>
              <br /><span className="--height">実現するなら。</span>
            </p>
            <div className="p-fv__text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
              「下積み10年」を、3ヶ月でショートカットしろ。<br />入社即、寿司学校へ。学費全額会社負担。<br />築地100年の伝統と革新の技術を、最短で。
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              築地青空三代目は、お前の人生の時間を無駄にはさせない。
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
            <h2 className="c-heading" style={{ marginBottom: '2rem' }}>いつまで、裏方で<br className="u-sp" />くすぶっているつもりだ？</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
              毎日、来る日も来る日も皿洗い。先輩の背中を見るだけで、包丁すら握らせてもらえない。<br />
              そんな「古い修行」の常識を、俺たちがぶち壊す。<br /><br />
              必要なのは、<strong>ガッツ</strong>。必要なのは、<strong>向上心</strong>。<br />
              築地100年の歴史と、世界初業態を生み出した圧倒的な環境を、<br />
              お前が最短で駆け上がるための「踏み台」にしてくれ。
            </p>
            <div className="p-feature__boxes">
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">3ヶ月間の「特攻」修行</span>
                  <span className="p-feature__heading-bottom">学費全額負担</span>
                </h3>
                <p className="p-feature__text --01">入社後、まずは『飲食人大学』で寿司職人の基礎を徹底的に叩き込む。「見て盗め」ではなく「科学的に学ぶ」。現場で数年かかる基礎を3ヶ月で完遂させる。その費用（数十万円）は、お前への「期待」として会社がすべて負担する。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">圧倒的な「打席数」と</span>
                  <span className="p-feature__heading-bottom">「抜擢」</span>
                </h3>
                <p className="p-feature__text">学校を出たら、即、実戦だ。創業100年の問屋直送、日本最高峰のネタが毎日お前の前に並ぶ。「24歳の板長」誕生は、うちではニュースじゃない。ガッツがあれば、入社1年目から責任ある仕事を任せる。年功序列は、築地のゴミ箱に捨ててきた。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">ミシュラン星獲得者を生む</span>
                  <span className="p-feature__heading-bottom">本物の技</span>
                </h3>
                <p className="p-feature__text --03">ショートカットするのは期間だけで、技術に妥協はない。総親方・前田康衛の直伝。そして世界を驚かせた「焼うおいし川」の革新的ノウハウ。「伝統」と「革命」の両方を手に入れたお前は、世界中どこへ行っても通用する本物のプロになれる。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job" style={{ background: '#fafafa', padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="c-heading --job" style={{ marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 'bold' }}>数字と事実で黙らせる</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>24歳</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>最年少板長就任実績</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>100%</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>飲食人大学への<br />通学費用負担率</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>実績あり</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>独立後にミシュラン星を<br />獲得した輩出者</p>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.4rem', fontWeight: '900', color: '#c41e3a', marginBottom: '1rem', lineHeight: '1', fontFamily: '"Hiragino Sans", "ヒラギノ角ゴシック", sans-serif' }}>世界展開</div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', color: '#333' }}>国内外へ拡大中の<br />「焼うおいし川」への挑戦</p>
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
                    希望者は入社後、3ヶ月間<br className="u-pc" />寿司学校で徹底指導!
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
                <p className="p-case__heading">未経験から入社1年で<br className="u-pc" />カウンター任されるまでに成長</p>
                <p className="p-case__text">他の店では何年もかかる修行を、3ヶ月の寿司学校で一気に習得。学校では理論的に学べるから、実践でもすぐに活かせた。今では自分の握りをお客様に提供できる喜びを毎日感じています。会社が学費を全額負担してくれたのも本当にありがたかった。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />3ヶ月で基礎を完全習得</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />入社1年でカウンター担当</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />学費全額会社負担で安心</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">入社2年目 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">24歳で板長に抜擢。<br className="u-pc" />年功序列じゃない、実力主義の環境</p>
                <p className="p-case__text">「やる気があれば任せる」という言葉通り、若手でもどんどんチャンスをもらえる環境です。最高級のネタを毎日扱える贅沢さと、総親方から直接学べる技術。この両方があるから、他では経験できない成長スピードで駆け上がれました。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />24歳で板長に昇格</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />築地直送の最高級ネタ</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />総親方の直接指導</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">板長 / 20代 / 男性</p>
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
                  <p className="p-faq__a">はい、未経験でも大歓迎です。必要なのはガッツと向上心だけ。飲食人大学で基礎から学べます。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">飲食人大学の学費は本当に無料？</p>
                  <p className="p-faq__a">はい、100万円ほどかかる学費を会社が全額負担します。あなたへの期待の証です。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">どれくらいで一人前になれる？</p>
                  <p className="p-faq__a">3ヶ月の学校で基礎を習得後、実戦で腕を磨きます。意欲次第で1年目からカウンターも可能。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">創業社長の面接は必ずありますか？</p>
                  <p className="p-faq__a">最終面接で実施する場合があります（100%ではありません）。あなたの本気度を見極めます。</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">将来的に独立も目指せますか？</p>
                  <p className="p-faq__a">もちろんです。実際に独立後、ミシュラン星を獲得した卒業生もいます。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">「面白い若手が来た」と、俺に言わせてみろ。</p>
              <p className="p-footer-cta__text--main">経験も知識も、今はなくていい。<br />必要なのは、このチャンスを掴み取る「握力」だけだ。</p>
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
