const mail = "roudokukentei@gmail.com";
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const qualifications = [
  {
    name: "総合採点者資格",
    price: "110,000",
    desc: "朗読検定・読み聞かせ検定の両方に対応",
    note: "単体2資格の合計143,000円より33,000円お得",
    featured: true,
  },
  {
    name: "朗読検定採点者資格",
    price: "77,000",
    desc: "朗読検定10級〜2級まで全級対応",
    note: "一般朗読＋ジュニア朗読採点者資格のセット",
  },
  {
    name: "読み聞かせ検定採点者資格",
    price: "66,000",
    desc: "読み聞かせ検定のみ対応",
  },
  {
    name: "一般朗読採点者資格",
    price: "55,000",
    desc: "朗読検定4級〜2級に対応",
  },
  {
    name: "ジュニア朗読採点者資格",
    price: "33,000",
    desc: "朗読検定10級〜5級に対応",
    note: "一般朗読採点者資格の取得後に受講",
  },
];

const faqs = [
  {
    q: "経験が浅くても大丈夫ですか？",
    a: "大丈夫です。採点基準に沿って判断するため、Zoom研修でゼロから丁寧にお教えします。",
  },
  {
    q: "採点料の目安を教えてください。",
    a: "3級の採点は1件約15分、20件で12,000円。読み聞かせ初級は1件約20分、10件で6,000円が目安です。",
  },
  {
    q: "受講料はいつ回収できますか？",
    a: "継続して採点いただくことで、数ヶ月での回収が可能です。",
  },
  {
    q: "最初の採点が不安です。",
    a: "最初の1件は担当者が一緒に確認します。一人で抱え込む必要はありません。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="ページ上部へ">
          <span className="logoCrop roudokuLogo"><img src={`${assetBase}/roudoku-logo-transparent.png`} alt="朗読検定" /></span>
          <span className="brandDivider" aria-hidden="true" />
          <span className="logoCrop yomikenLogo"><img src={`${assetBase}/yomiken-logo.png`} alt="読み聞かせ検定" /></span>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#work">仕事の流れ</a>
          <a href="#course">資格・受講料</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <a className="miniCta" href={`mailto:${mail}?subject=採点者資格について`}>
          メールで相談
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">日本朗読検定協会 認定</p>
          <h1>
            「聴く力」を身につけ、<br />
            <em>検定を支える仕事</em>に。
          </h1>
          <p className="lead">
            朗読・読み聞かせ検定の採点を専業で担う、新しい資格です。
            経験不問。Zoom研修と最初の1件の伴走サポートで、
            安心して採点業務を始められます。
          </p>
          <div className="heroActions">
            <a className="primaryCta" href={`mailto:${mail}?subject=採点者資格への申し込み・相談`}>
              申し込み・相談をする <span>→</span>
            </a>
            <a className="textLink" href="#course">資格を比較する ↓</a>
          </div>
          <p className="microcopy">ご質問だけでも歓迎です。メールでお気軽にどうぞ。</p>
        </div>
        <div className="heroVisual" aria-label="採点シートを確認するイメージ">
          <div className="soundRings" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="scoreCard">
            <div className="scoreTop">
              <span>採点シート</span>
              <b>01</b>
            </div>
            <div className="wave" aria-hidden="true">
              {Array.from({ length: 28 }, (_, i) => <i key={i} />)}
            </div>
            <div className="criteria">
              <span>声の表現</span><b>✓</b>
              <span>間・テンポ</span><b>✓</b>
              <span>作品理解</span><b>✓</b>
            </div>
          </div>
          <div className="seal">経験<br /><strong>不問</strong></div>
        </div>
      </section>

      <section className="proofBand" aria-label="資格の特長">
        <div><strong>在宅で完結</strong><span>Gmail・Excelの基本操作のみ</span></div>
        <div><strong>丁寧な研修</strong><span>Zoomでゼロからサポート</span></div>
        <div><strong>仕事につながる</strong><span>資格に応じて案件を振り分け</span></div>
      </section>

      <section className="section intro" id="work">
        <div className="sectionLabel">HOW IT WORKS</div>
        <div className="sectionHeading">
          <h2>採点の仕事は、<br />3つのステップ。</h2>
          <p>必要なのは、GmailとExcelの基本操作。操作に不安がある方も、Zoom研修で丁寧にサポートします。</p>
        </div>
        <div className="steps">
          <article><span>01</span><div className="stepIcon">受</div><h3>課題を受け取る</h3><p>対応できる期間を申告し、メールで課題を受け取ります。</p></article>
          <article><span>02</span><div className="stepIcon">聴</div><h3>採点シートに入力</h3><p>採点基準に沿って音声を確認し、Excelへ入力します。</p></article>
          <article><span>03</span><div className="stepIcon">送</div><h3>メールで送信</h3><p>入力済みの採点シートを、期限までにメールで提出します。</p></article>
        </div>
      </section>

      <section className="section courseSection" id="course">
        <div className="sectionLabel">COURSES & FEES</div>
        <div className="sectionHeading">
          <h2>目指す働き方に合う<br />資格を選べます。</h2>
          <p>朗読・読み聞かせの両方に対応できる総合資格から、専門を絞った資格まで。表示価格はすべて税込です。</p>
        </div>
        <div className="courseGrid">
          {qualifications.map((item) => (
            <article className={item.featured ? "course featured" : "course"} key={item.name}>
              {item.featured && <span className="recommend">おすすめ・最大の機会</span>}
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                {item.note && <small>{item.note}</small>}
              </div>
              <div className="price"><strong>{item.price}</strong><span>円</span></div>
            </article>
          ))}
        </div>
        <p className="payment">お支払い：銀行振込 または クレジットカード</p>
      </section>

      <section className="section assignment">
        <div className="assignmentCopy">
          <div className="sectionLabel">ASSIGNMENT POLICY</div>
          <h2>続けやすさと公平さを<br />大切にしています。</h2>
          <p>案件は、無理なく継続できることを第一に、資格や実績も踏まえて公平に振り分けます。</p>
        </div>
        <ol className="rules">
          <li><span>01</span><div><h3>希望優先制</h3><p>「この期間に対応できます」という申告を最優先にします。</p></div></li>
          <li><span>02</span><div><h3>資格種別</h3><p>総合資格は両検定、単体資格は該当検定に対応します。</p></div></li>
          <li><span>03</span><div><h3>ローテーション</h3><p>特定の方に集中しないよう、順番に割り振ります。</p></div></li>
          <li><span>04</span><div><h3>実績加点</h3><p>採点精度と提出速度が高い方は、優先度が上がります。</p></div></li>
        </ol>
      </section>

      <section className="earnings">
        <div>
          <p className="eyebrow">EARNING EXAMPLES</p>
          <h2>採点料の目安</h2>
        </div>
        <article><span>朗読検定 3級</span><strong>20件で 12,000円</strong><small>1件あたり約15分</small></article>
        <article><span>読み聞かせ検定 初級</span><strong>10件で 6,000円</strong><small>1件あたり約20分</small></article>
        <p className="earnNote">継続して採点いただくことで、受講料は数ヶ月での回収が可能です。</p>
      </section>

      <section className="section faq" id="faq">
        <div className="sectionLabel">FAQ</div>
        <div className="faqLayout">
          <div><h2>よくあるご質問</h2><p>始める前の不安を解消します。</p></div>
          <div className="faqList">
            {faqs.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary><span>Q.</span>{item.q}<i>＋</i></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="quoteMark">“</div>
        <p className="eyebrow">TAKE THE FIRST STEP</p>
        <h2>表現を聴き、成長を支える。<br />その一歩を、今日から。</h2>
        <p>資格選びのご相談から承ります。経験や現在のスキルに不安がある方も、まずはお気軽にご連絡ください。</p>
        <a className="primaryCta light" href={`mailto:${mail}?subject=採点者資格への申し込み・相談`}>
          メールで申し込み・相談 <span>→</span>
        </a>
        <a className="mailAddress" href={`mailto:${mail}`}>{mail}</a>
      </section>

      <footer>
        <div className="brand">
          <span className="logoCrop roudokuLogo"><img src={`${assetBase}/roudoku-logo-transparent.png`} alt="朗読検定" /></span>
          <span className="brandDivider" aria-hidden="true" />
          <span className="logoCrop yomikenLogo"><img src={`${assetBase}/yomiken-logo.png`} alt="読み聞かせ検定" /></span>
        </div>
        <p>© 一般社団法人日本朗読検定協会</p>
      </footer>
    </main>
  );
}
