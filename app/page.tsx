const mail = "roudokukentei@gmail.com";
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const inquiryHref = `mailto:${mail}?subject=${encodeURIComponent("採点者資格の詳しい案内を希望します")}&body=${encodeURIComponent("お名前：\n興味のある資格：\nご質問・ご相談：\n")}`;

const qualifications = [
  {
    name: "総合採点者資格",
    price: "110,000",
    desc: "朗読検定・読み聞かせ検定の両方に対応",
    note: "単体2資格の合計143,000円より33,000円お得",
    forWhom: "担当できる採点業務の幅を広げたい方",
    featured: true,
  },
  {
    name: "朗読検定採点者資格",
    price: "77,000",
    desc: "朗読検定10級〜2級まで全級対応",
    note: "一般朗読＋ジュニア朗読採点者資格のセット",
    forWhom: "朗読検定の全級を担当したい方",
  },
  {
    name: "読み聞かせ検定採点者資格",
    price: "66,000",
    desc: "読み聞かせ検定のみ対応",
    forWhom: "読み聞かせを専門にしたい方",
  },
  {
    name: "一般朗読採点者資格",
    price: "55,000",
    desc: "朗読検定4級〜2級に対応",
    forWhom: "一般部門から始めたい方",
  },
  {
    name: "ジュニア朗読採点者資格",
    price: "33,000",
    desc: "朗読検定10級〜5級に対応",
    note: "一般朗読採点者資格の取得後に受講",
    forWhom: "取得済み資格の担当範囲を広げたい方",
  },
];

const faqs = [
  {
    q: "対象検定を受検したことがなくても取得できますか？",
    a: "可能です。Zoomを利用して採点基準をしっかり研修しますので、対象検定を未受検の方も無理なく採点業務を始めていただけます。",
  },
  {
    q: "朗読や読み聞かせの経験はどの程度必要ですか？",
    a: "「興味がある」という段階でも大丈夫です。検定の採点は、それぞれの課題に設定された採点項目に基づいて行います。研修で採点項目と判断基準を理解し、正しく採点できるように練習します。",
  },
  {
    q: "資格を取れば必ず仕事を受けられますか？",
    a: "はい。資格取得後は、本部から採点業務をご案内します。対応できる期間を申告し、無理のないペースで始めていただけます。なお、依頼件数は時期・資格・採点の正確性や効率によって変わります。",
  },
  {
    q: "採点依頼は月に何件ありますか？",
    a: "採点の正確性や効率によって変わります。正確性と採点効率が高い方には、月50件以上を依頼する場合もあります。依頼件数は一律ではなく、時期や対応可能な期間によっても変動します。",
  },
  {
    q: "研修は何時間ですか？",
    a: "個人差はありますが、基礎講習・実習・振り返り講習を合わせて120分です。必要に応じてサポート講習やメールサポートも行います。",
  },
  {
    q: "採点を間違えた場合はどうなりますか？",
    a: "2人目・3人目のベテラン採点者が確認し、必要に応じて修正します。さらに本部でも校正するため、3段階でチェックします。間違いが多い場合には、無償で再講習を行います。",
  },
  {
    q: "パソコンが苦手でも大丈夫ですか？",
    a: "スマートフォンだけでも採点業務は可能です。ただし、パソコンを使用した方が採点シートへの入力やメールのやり取りを効率よく行えます。",
  },
  {
    q: "受講後のキャンセル・返金はできますか？",
    a: "受講開始後のキャンセルおよび返金は承れません。内容をご確認のうえ、お申し込みください。",
  },
  {
    q: "資格の更新料や年会費はありますか？",
    a: "更新料や年会費は一切かかりません。",
  },
  {
    q: "1人目・2人目・3人目はそれぞれ何をしますか？",
    a: "1人目は採点を行い、採点シートの原簿を作成します。2人目・3人目は採点内容を確認し、必要に応じて修正やコメントの追記を行います。その後、本部が校正します。",
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
            朗読・読み聞かせの経験を、<br />
            在宅でできる<em>「検定採点の仕事」</em>に。
          </h1>
          <p className="lead">
            採点経験がなくても、一人で合否を判断することはありません。
            Zoomで採点基準を研修し、朗読検定・読み聞かせ検定は3名で採点。
            2人目・3人目にはベテラン採点者を配置します。
          </p>
          <div className="qualityPromise" aria-label="3名採点による品質管理">
            <strong>一人の判断で決めません</strong>
            <span>1人目の採点 ＋ ベテラン2名の確認</span>
          </div>
          <div className="heroActions">
            <a className="primaryCta" href={inquiryHref}>
              資格の詳しい案内を受け取る <span>→</span>
            </a>
            <a className="textLink" href="#course">資格を比較する ↓</a>
          </div>
          <p className="microcopy">受講を決めていなくても大丈夫です。ご質問だけでもお気軽にどうぞ。</p>
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
        <div><strong>丁寧な基準研修</strong><span>Zoomでゼロからサポート</span></div>
        <div><strong>3名で採点</strong><span>ベテラン2名が採点票を確認</span></div>
      </section>

      <section className="qualitySection" aria-labelledby="quality-heading">
        <div className="qualityIntro">
          <p className="sectionLabel">TRIPLE REVIEW SYSTEM</p>
          <h2 id="quality-heading">朗読検定、読み聞かせ検定は、<em>3名で採点</em>します。</h2>
          <p>
            採点者は研修で採点基準をしっかり身につけます。
            さらに、2人目・3人目にはベテラン採点者を配置。
            複数の視点で採点票を確認することで、正確性と妥当性の高い採点を目指しています。
          </p>
        </div>
        <div className="reviewFlow" aria-label="3名による採点の流れ">
          <article className="reviewPrimary">
            <span>1人目</span>
            <strong>採点票を作成</strong>
            <small>研修した採点基準に沿って採点</small>
          </article>
          <div className="reviewPlus" aria-hidden="true">＋</div>
          <article>
            <span>2人目</span>
            <strong>ベテランが確認</strong>
            <small>採点内容と基準への適合をチェック</small>
          </article>
          <div className="reviewPlus" aria-hidden="true">＋</div>
          <article>
            <span>3人目</span>
            <strong>ベテランが確認</strong>
            <small>複数の視点から最終チェック</small>
          </article>
        </div>
        <p className="qualityConclusion">研修 × 3名採点で、採点の正確性・妥当性を支えます。</p>
      </section>

      <section className="fitSection" id="fit">
        <div className="fitIntro">
          <p className="sectionLabel">IS THIS FOR YOU?</p>
          <h2>この資格は、こんな方に向いています。</h2>
          <p>朗読や読み聞かせへの興味を、基準に沿って人の成長を支える仕事につなげたい方へ。</p>
        </div>
        <div className="fitGrid">
          <article><span>✓</span><p>朗読や読み聞かせの経験を仕事につなげたい</p></article>
          <article><span>✓</span><p>在宅でできる専門的な仕事を探している</p></article>
          <article><span>✓</span><p>教室運営よりも、採点業務に集中したい</p></article>
          <article><span>✓</span><p>人の表現を丁寧に聴くことが好き</p></article>
          <article><span>✓</span><p>経験は浅くても、基準を学びながら始めたい</p></article>
        </div>
        <div className="notFit">
          <strong>次のような方には向いていません</strong>
          <p>音声を丁寧に確認することが苦手な方／採点基準より自分の好みを優先したい方／納期や連絡ルールを守れない方</p>
        </div>
      </section>

      <section className="section startFlow">
        <div className="sectionLabel">STARTING PROCESS</div>
        <div className="sectionHeading">
          <h2>申し込みから採点開始まで。</h2>
          <p>基礎講習・実習・振り返り講習を通じて、採点基準を身につけてから実務を始めます。</p>
        </div>
        <ol className="startSteps">
          <li><span>01</span><strong>申し込み</strong><small>資格を選び、受講手続きを行います</small></li>
          <li><span>02</span><strong>Zoom研修</strong><small>基礎講習・実習・振り返り講習、計120分</small></li>
          <li><span>03</span><strong>資格認定</strong><small>採点項目と判断基準の理解を確認します</small></li>
          <li><span>04</span><strong>最初の採点</strong><small>担当者の伴走とベテラン採点者の確認があります</small></li>
          <li><span>05</span><strong>継続して受託</strong><small>対応可能な期間を申告し、本部から課題を受け取ります</small></li>
        </ol>
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
                <p className="forWhom">おすすめ：{item.forWhom}</p>
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
        <p className="earnNote">採点料・依頼件数・作業時間は、資格、時期、採点の正確性・効率によって異なります。</p>
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
        <h2>一人で判断しないから、<br />未経験から採点を始められます。</h2>
        <p>資格選びのご相談から承ります。受講を決めていなくても、まずは詳しい案内をお受け取りください。</p>
        <a className="primaryCta light" href={inquiryHref}>
          資格の詳しい案内を受け取る <span>→</span>
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
