import { useEffect, useMemo, useState } from "react";
import {
  links,
  lives,
  memories,
  navItems,
  news,
  profileData,
  reports,
  socialLinks,
  socialPlatforms,
  supportProject,
  supporters,
} from "./data/siteData.js";

function getRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  return navItems.some((item) => item.id === hash) ? hash : "home";
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const page = useMemo(() => {
    switch (route) {
      case "live":
        return <LivePage />;
      case "support":
        return <SupportPage />;
      case "profile":
        return <ProfilePage />;
      case "memories":
        return <MemoriesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }, [route]);

  return (
    <>
      <Header activeRoute={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{page}</main>
      <FloatingActions />
      <Footer />
    </>
  );
}

function Header({ activeRoute, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="LEOL HOME">
          <span className="brand-main">LEOL</span>
          <span className="brand-sub">MASAAKI FAN SITE</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="メニューを開閉"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`global-nav ${menuOpen ? "is-open" : ""}`} aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeRoute === item.id ? "is-active" : ""}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={links.ticket} target="_blank" rel="noreferrer">
          LIVE予約
        </a>
      </div>
    </header>
  );
}

function HomePage() {
  const nextLive = lives[0];

  return (
    <>
      <section className="hero">
        <ImageWithFallback src="/images/hero-banner.png" alt="" className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow">MASAAKI FAN SITE</p>
          <h1>MASAAKI</h1>
          <p className="hero-subtitle">Leol Fan Site</p>
          <p className="hero-copy">音楽でつながる、私たちの場所。</p>
          <div className="button-row">
            <a className="button primary" href={links.ticket} target="_blank" rel="noreferrer">
              ライブを予約する
            </a>
            <a className="button gold" href={links.support} target="_blank" rel="noreferrer">
              カンパで応援する
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="NEXT LIVE" title="次回ライブ" />
        <FeaturedLiveCard live={nextLive} />
      </section>

      <section className="section container">
        <SectionHeading eyebrow="SUPPORT" title="応援の入り口" />
        <div className="support-grid">
          <ActionCard
            title="フラスタ・カンパ企画"
            text="ライブ当日に会場へ届けるお花と装飾を、参加できる方で少しずつ支えます。"
            href="#support"
          />
          <ActionCard
            title="応援メッセージを送る"
            text="MASAAKIへ届けたい言葉をフォームから募集しています。短い一言でも歓迎です。"
            href={links.messageForm}
            external
          />
          <ActionCard
            title="サポーター一覧"
            text="掲載を希望された方のお名前を、企画ごとに大切に記録します。匿名掲載も可能です。"
            href="#support"
          />
        </div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="LATEST FROM MASAAKI" title="SNS最新投稿" />
        <SocialCardGrid />
      </section>

      <section className="section container two-column">
        <div>
          <SectionHeading eyebrow="NEWS" title="お知らせ" />
          <div className="news-list">
            {news.map((item) => (
              <article className="news-item" key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="letter-panel">
          <ImageWithFallback src="/images/fanletter-present.png" alt="手紙とプレゼント" />
          <div>
            <p className="eyebrow">FAN LETTER & PRESENT</p>
            <h2>想いを届ける前に</h2>
            <p>
              ファンレターやプレゼントの送付先、受付ルールをまとめています。事務所の最新案内も必ずご確認ください。
            </p>
            <a className="button primary" href="#contact">
              ファンレター・プレゼントの送付先はこちら
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}

function LivePage() {
  const [nextLive, ...upcoming] = lives;

  return (
    <PageShell eyebrow="LIVE" title="出演情報" intro="次回ライブを中心に、予約先と会場情報をまとめています。">
      <section className="section compact-section">
        <FeaturedLiveCard live={nextLive} large />
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="UPCOMING" title="今後のライブ" />
        <div className="live-list">
          {upcoming.map((live) => (
            <LiveCard key={live.id} live={live} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function SupportPage() {
  return (
    <PageShell
      eyebrow="SUPPORT"
      title="カンパ・フラスタ応援"
      intro="参加できる人が、無理のない範囲で支え合える企画を目指しています。"
    >
      <section className="section compact-section support-hero">
        <div className="support-hero-text">
          <p className="eyebrow">NOW OPEN</p>
          <h2>{supportProject.title}</h2>
          <dl className="info-list">
            <div>
              <dt>募集期間</dt>
              <dd>{supportProject.period}</dd>
            </div>
            <div>
              <dt>目標金額</dt>
              <dd>{supportProject.target}</dd>
            </div>
            <div>
              <dt>用途</dt>
              <dd>{supportProject.use}</dd>
            </div>
            <div>
              <dt>余剰金</dt>
              <dd>{supportProject.surplus}</dd>
            </div>
          </dl>
          <p className="transparency-note">
            お預かりしたカンパは企画目的に沿って使用し、イベント終了後に支出の内訳を掲載します。個別の金額や個人情報は公開しません。
          </p>
          <div className="button-row">
            <a className="button gold" href={supportProject.supportUrl} target="_blank" rel="noreferrer">
              カンパする
            </a>
            <a className="button secondary" href={supportProject.messageUrl} target="_blank" rel="noreferrer">
              応援メッセージを送る
            </a>
          </div>
        </div>
        <ImageWithFallback src="/images/support-flowers.png" alt="青い花束" />
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="SUPPORTERS" title="サポーター名掲載" />
        <p className="lead">
          掲載希望者のみお名前を掲載します。匿名希望、ニックネームでの掲載も可能です。
        </p>
        <div className="supporter-list">
          {supporters.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="REPORT" title="収支報告" />
        <div className="report-list">
          {reports.map((report) => (
            <article className="report-item" key={report.title}>
              <div>
                <h3>{report.title}</h3>
                <p>{report.status}</p>
              </div>
              <a href={report.url} target="_blank" rel="noreferrer">
                報告を見る
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ProfilePage() {
  return (
    <PageShell eyebrow="PROFILE" title="MASAAKI" intro={profileData.tagline}>
      <section className="section compact-section profile-layout">
        <ImageWithFallback src="/images/profile.jpg" alt="MASAAKIプロフィール画像" />
        <div>
          <p className="eyebrow">ARTIST PROFILE</p>
          <h2>MASAAKI</h2>
          <p className="profile-tagline">{profileData.tagline}</p>
          {profileData.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="BASIC INFO" title="基本情報" />
        <dl className="profile-info-list">
          {profileData.basicInfo.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="HISTORY" title="経歴" />
        <div className="profile-history-list">
          {profileData.history.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="OFFICIAL SNS" title="公式SNS" />
        <SocialLinkGrid />
      </section>
    </PageShell>
  );
}

function MemoriesPage() {
  return (
    <PageShell
      eyebrow="MEMORIES"
      title="Leol Memories"
      intro="これまで贈ったフラスタ、花束、プレゼント企画を写真と一緒に残していきます。"
    >
      <section className="section compact-section">
        <div className="memory-grid">
          {memories.map((memory) => (
            <article className="memory-card" key={memory.id}>
              <ImageWithFallback src={memory.image} alt={`${memory.event} ${memory.type}`} />
              <div>
                <p className="memory-meta">
                  {memory.month} / {memory.type}
                </p>
                <h2>{memory.event}</h2>
                <p>{memory.comment}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      eyebrow="CONTACT"
      title="連絡先・送付先"
      intro="運営への連絡、ファンレターやプレゼントの送付先をまとめています。"
    >
      <section className="section compact-section contact-layout">
        <div className="contact-card">
          <h2>運営アカウント</h2>
          <p>
            {/* TODO: 運営アカウントの正式URLに差し替えてください。 */}
            LEOL運営へのご連絡は、運営SNSまたはお問い合わせフォームからお願いします。
          </p>
          <dl className="info-list">
            <div>
              <dt>運営SNS</dt>
              <dd>
                <a href="https://example.com/leol-staff" target="_blank" rel="noreferrer">
                  @leol_staff
                </a>
              </dd>
            </div>
            <div>
              <dt>お問い合わせ</dt>
              <dd>
                <a href={links.contactForm} target="_blank" rel="noreferrer">
                  フォームを開く
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact-card image-card">
          <ImageWithFallback src="/images/fanletter-present.png" alt="ファンレターとプレゼント" />
          <h2>ファンレター・プレゼント送付先</h2>
          <p>
            {/* TODO: 事務所確認後、正式な送付先に差し替えてください。 */}
            〒000-0000 東京都○○区○○ 0-0-0 MASAAKI 宛
          </p>
          <p className="notice">
            生もの、危険物、現金などは受け取れない場合があります。詳細は事務所の案内をご確認ください。
          </p>
        </div>
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow="OFFICE" title="事務所情報" />
        <div className="office-box">
          <p>
            {/* TODO: 所属事務所の正式名称、受付ルール、公式案内URLに差し替えてください。 */}
            事務所名・受付ルール・公式案内URLをここに掲載します。
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, intro, children }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <div className="container">{children}</div>
    </div>
  );
}

function FeaturedLiveCard({ live, large = false }) {
  return (
    <article className={`featured-live ${large ? "is-large" : ""}`}>
      <ImageWithFallback src={large ? "/images/livehouse-stage-sub.png" : live.image} alt={`${live.title} ステージ`} />
      <div className="featured-live-content">
        <p className="eyebrow">NEXT LIVE</p>
        <time>{live.date}</time>
        <h2>{live.title}</h2>
        <p className="live-time">OPEN {live.open} / START {live.start}</p>
        <p className="venue">{live.venue}</p>
        <p>{live.note}</p>
        <a className="button primary" href={live.reserveUrl} target="_blank" rel="noreferrer">
          チケット予約はこちら
        </a>
      </div>
    </article>
  );
}

function LiveCard({ live }) {
  return (
    <article className="live-card">
      <div>
        <time>{live.date}</time>
        <h2>{live.title}</h2>
        <p>{live.venue}</p>
        <p className="live-time">OPEN {live.open} / START {live.start}</p>
      </div>
      <a className="button secondary" href={live.reserveUrl} target="_blank" rel="noreferrer">
        予約する
      </a>
    </article>
  );
}

function SocialCardGrid() {
  return (
    <div className="home-social-grid">
      {socialPlatforms.map((item) => (
        <article className="home-social-card" key={item.id}>
          <span>{item.mark}</span>
          <h3>{item.label}</h3>
          <a className="button primary" href={socialLinks[item.id]} target="_blank" rel="noreferrer">
            {item.cta}
          </a>
        </article>
      ))}
    </div>
  );
}

function SocialLinkGrid() {
  return (
    <div className="social-link-grid">
      {socialPlatforms.map((item) => (
        <a key={item.id} href={socialLinks[item.id]} target="_blank" rel="noreferrer">
          <span>{item.mark}</span>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function ActionCard({ title, text, href, external = false }) {
  return (
    <article className="action-card">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        詳しく見る
      </a>
    </article>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ImageWithFallback({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`image-wrap ${className} ${failed ? "has-fallback" : ""}`}>
      {!failed && <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {failed && <div className="image-fallback" aria-hidden="true" />}
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="重要リンク">
      <a href={links.ticket} target="_blank" rel="noreferrer">
        LIVE予約
      </a>
      <a href={links.support} target="_blank" rel="noreferrer">
        応援する
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <a className="footer-brand" href="#home">
          LEOL
        </a>
        <p>このサイトはファン有志が運営する非公式ファンサイトです。</p>
      </div>
    </footer>
  );
}

export default App;
