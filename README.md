# LEOL | MASAAKI FAN SITE

MASAAKIを応援するファン有志による非公式ファンサイトです。  
Vite + React の静的サイトなので、掲示板やDBなしで Netlify にそのままデプロイできます。

## 開発

```bash
npm install
npm run dev
```

本番ビルド:

```bash
npm run build
```

## 画像の差し替え方法

画像は `public/images` に置きます。ファイル名を同じにするとコード変更なしで差し替えできます。

- `hero-banner.png`: HOMEのヒーロー背景
- `livehouse-stage.png`: HOMEのNEXT LIVEカード
- `livehouse-stage-sub.png`: LIVEページ
- `profile.jpg`: PROFILEページ
- `support-flowers.png`: SUPPORTページ
- `fanletter-present.png`: CONTACTページ、HOMEの案内
- `memory-flower-01.jpg`: MEMORIESギャラリー
- `memory-flower-02.jpg`: MEMORIESギャラリー

画像が未配置でもレイアウトが崩れないよう、CSSの代替背景が表示されます。

## ライブ情報の更新方法

`src/data/siteData.js` の `lives` 配列を編集します。  
一番上のデータが「次回ライブ」としてHOMEとLIVEページ上部に大きく表示されます。

```js
{
  id: "one-man-20260830",
  date: "2026.08.30",
  title: "ONE MAN LIVE",
  open: "17:00",
  start: "18:00",
  venue: "SHIBUYA WWW X",
  city: "Tokyo",
  image: "/images/livehouse-stage.png",
  reserveUrl: "https://example.com/ticket",
  note: "次回ワンマンライブ。詳細は予約ページをご確認ください。",
}
```

`reserveUrl` は正式なチケット予約URLに差し替えてください。仮URLには `TODO` コメントを入れています。

## SUPPORT企画情報の更新方法

`src/data/siteData.js` の `supportProject` を編集します。

- `title`: 企画名
- `period`: 募集期間
- `target`: 目標金額
- `use`: 用途
- `surplus`: 余剰金の扱い
- `supportUrl`: カンパ受付URL
- `messageUrl`: 応援メッセージフォームURL

サポーター名は `supporters` 配列、収支報告は `reports` 配列で管理します。掲載希望者のみ、匿名希望も可という前提の文言をサイト内に入れています。

## SNS埋め込みコードの差し替え方法

SNSリンクは `src/data/siteData.js` の `socialLinks` を編集します。

埋め込み枠は `src/App.jsx` の `SocialEmbed` コンポーネントにあります。以下の `TODO` コメント部分を公式の埋め込みコードに差し替えてください。

- `TODO: Instagram embed code`
- `TODO: X timeline embed code`
- `TODO: TikTok embed code`
- `TODO: YouTube embed URL`

HOMEの「LATEST FROM MASAAKI」はタブで切り替え、選択されたSNSだけを表示する作りです。YouTube iframe には `loading="lazy"` を設定しています。

## Netlifyへのデプロイ方法

1. このリポジトリをGitHubなどにpushします。
2. Netlifyで「Add new site」から対象リポジトリを選びます。
3. Build command は `npm run build`、Publish directory は `dist` を指定します。
4. `netlify.toml` を同梱しているため、通常は自動で同じ設定が読み込まれます。
5. デプロイ後、仮URLや仮テキスト、OGP URLを正式な内容へ差し替えてください。

## GitHubへWebから手動アップロードする方法

1. GitHubで `leolfansite/leol-fansite` リポジトリを開きます。
2. 空のリポジトリの場合は、画面内の「uploading an existing file」を選びます。
3. すでにファイルがある場合は、右上付近の「Add file」から「Upload files」を選びます。
4. zipを展開し、中身のファイルとフォルダをすべてドラッグ&ドロップします。
5. `node_modules`、`dist`、`.git` はアップロード不要です。このzipには含めていません。
6. 画面下のコミット欄に `Initial LEOL fan site` などのメッセージを入力します。
7. 「Commit changes」を押すとGitHub上に反映されます。

アップロード後、NetlifyでこのGitHubリポジトリを選択し、Build command に `npm run build`、Publish directory に `dist` を指定してください。

## 主な編集ファイル

- `src/data/siteData.js`: ライブ情報、カンパ情報、SNSリンク、ニュース、メモリーを管理
- `src/App.jsx`: ページ構成とコンポーネント
- `src/styles.css`: デザイン、レスポンシブ、固定ヘッダー、固定CTA
- `index.html`: title、description、OGP meta
