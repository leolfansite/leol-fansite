export const navItems = [
  { id: "home", label: "HOME" },
  { id: "live", label: "LIVE" },
  { id: "support", label: "SUPPORT" },
  { id: "profile", label: "PROFILE" },
  { id: "memories", label: "MEMORIES" },
  { id: "contact", label: "CONTACT" },
];

export const links = {
  // TODO: 正式なチケット予約URLに差し替えてください。
  ticket: "https://example.com/ticket",
  // TODO: 正式なカンパ受付URLに差し替えてください。
  support: "https://example.com/support",
  // TODO: 正式な応援メッセージフォームURLに差し替えてください。
  messageForm: "https://example.com/message",
  // TODO: 正式なお問い合わせフォームURLに差し替えてください。
  contactForm: "https://example.com/contact",
};

export const socialLinks = {
  // TODO: 必要に応じてMASAAKI公式Instagram URLを差し替えてください。
  instagram: "https://www.instagram.com/mkleo_official/?utm_source=ig_web_button_share_sheet",
  // TODO: MASAAKI公式X URLに差し替えてください。
  x: "https://x.com/masaaki_mkleo?s=20",
  // TODO: MASAAKI公式TikTok URLに差し替えてください。
  tiktok: "https://www.tiktok.com/@masaaki_rey?is_from_webapp=1&sender_device=pc",
  // TODO: MASAAKI公式YouTube URLに差し替えてください。
  youtube: "https://youtube.com/@masaaki_official-music",
};

// TODO: 最新動画のYouTube動画URLに差し替えてください。例: https://www.youtube.com/watch?v=VIDEO_ID
export const youtubeLatest = "";

export const socialPlatforms = [
  { id: "instagram", label: "Instagram", mark: "IG", cta: "MASAAKIのInstagramを見る" },
  { id: "x", label: "X", mark: "X", cta: "MASAAKIのXを見る" },
  { id: "tiktok", label: "TikTok", mark: "TT", cta: "MASAAKIのTikTokを見る" },
  { id: "youtube", label: "YouTube", mark: "YT", cta: "YouTubeで見る" },
];

export const lives = [
  {
    id: "one-man-20260830",
    date: "2026.08.30",
    title: "ONE MAN LIVE",
    open: "17:00",
    start: "18:00",
    venue: "SHIBUYA WWW X",
    city: "Tokyo",
    image: "/images/livehouse-stage.png",
    // TODO: 正式な予約URLに差し替えてください。
    reserveUrl: links.ticket,
    note: "次回ワンマンライブ。詳細は予約ページをご確認ください。",
  },
  {
    id: "acoustic-20260914",
    date: "2026.09.14",
    title: "ACOUSTIC NIGHT",
    open: "18:30",
    start: "19:00",
    venue: "Shimokitazawa LIVE HOUSE",
    city: "Tokyo",
    image: "/images/livehouse-stage-sub.png",
    // TODO: 正式な予約URLに差し替えてください。
    reserveUrl: "https://example.com/ticket-2",
    note: "小編成で届けるアコースティックライブ。",
  },
  {
    id: "joint-20261005",
    date: "2026.10.05",
    title: "BLUE LIGHT SESSION",
    open: "18:00",
    start: "18:45",
    venue: "Yokohama BAYSIS",
    city: "Kanagawa",
    image: "/images/livehouse-stage-sub.png",
    // TODO: 正式な予約URLに差し替えてください。
    reserveUrl: "https://example.com/ticket-3",
    note: "対バン形式のライブです。",
  },
];

export const supportProject = {
  title: "フラスタ・カンパ企画",
  period: "2026.07.01 - 2026.08.10",
  target: "80,000円",
  use: "会場へお届けするフラワースタンド、メッセージカード、装飾、運搬費に使用します。",
  surplus:
    "余剰金が発生した場合は、次回以降のMASAAKI応援企画へ繰り越し、収支報告にて明記します。",
  // TODO: 正式なカンパ受付URLに差し替えてください。
  supportUrl: links.support,
  // TODO: 正式な応援メッセージフォームURLに差し替えてください。
  messageUrl: links.messageForm,
};

export const supporters = [
  "Aoi",
  "Mina",
  "匿名希望",
  "Rika",
  "Sora",
  "掲載希望者のみ",
];

export const reports = [
  {
    title: "2026.08.30 ONE MAN LIVE 収支報告",
    status: "イベント終了後に掲載予定",
    // TODO: 収支報告PDFや画像のURLがある場合は差し替えてください。
    url: "https://example.com/report",
  },
];

export const news = [
  {
    date: "2026.07.03",
    title: "LEOLを公開しました",
    text: "MASAAKIを応援する非公式ファンサイトとして、ライブ情報と応援企画をまとめていきます。",
  },
  {
    date: "2026.07.01",
    title: "フラスタ・カンパ企画を受付中です",
    text: "次回ライブに向けた応援企画を開始しました。無理のない範囲でご参加ください。",
  },
  {
    date: "2026.06.20",
    title: "応援メッセージを募集しています",
    text: "ライブ当日に届けるメッセージカード用のコメントを募集しています。",
  },
];

export const memories = [
  {
    id: "memory-202605",
    month: "2026.05",
    event: "SPRING LIVE",
    image: "/images/memory-flower-01.jpg",
    type: "フラスタ",
    comment: "ブルーを中心に、やわらかな白と小さなゴールドを添えたお花を贈りました。",
  },
  {
    id: "memory-202602",
    month: "2026.02",
    event: "VALENTINE SESSION",
    image: "/images/memory-flower-02.jpg",
    type: "花束",
    comment: "ライブ後にお渡しする花束とメッセージカードをまとめました。",
  },
  {
    id: "memory-202512",
    month: "2025.12",
    event: "YEAR END LIVE",
    image: "/images/support-flowers.png",
    type: "プレゼント企画",
    comment: "ファン有志で冬のプレゼント企画を実施しました。",
  },
];
