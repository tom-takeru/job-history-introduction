# Another Activities

## TODO スケジュール化 Web アプリケーション開発

_期間：2022/8 〜 現在まで継続中_

### 概要

日々仕事をこなす中で、TODO の時間配分がうまくできないという問題がありました。
そこで、その日の予定と TODO から 1 日のスケジュールを自動で作成でたらなと思い、開発し始めました。

大学時代の友人と一緒に企画から始めて、開発を進めています。
私はフロントエンドの開発リーダーを担当していて、予定では、 2023/5 ごろに β 版を運用開始予定です。

#### 技術スタック

|                        |                                                                             |
| :--------------------: | :-------------------------------------------------------------------------: |
|      バックエンド      |                            JavaScript / Express                             |
|     フロントエンド     | TypeScript / React, Next.js, [Redux ToolKit](https://redux-toolkit.js.org/) |
|        スタイル        |                   [tailwindcss](https://tailwindcss.com/)                   |
|      データベース      |                                 PostgreSQL                                  |
|        インフラ        |                      [Docker](https://www.docker.com/)                      |
| フロントエンドサーバー |                     [Vercel](https://vercel.com/about)                      |
|  バックエンドサーバー  |                     [Render](https://render.com/about)                      |
|   開発時の PC の OS    |                                     Mac                                     |
|        デザイン        |                    [Figma](https://www.figma.com/about/)                    |
|     バージョン管理     |                                     Git                                     |
|   リモートリポジトリ   |                                   GitHub                                    |
|       タスク管理       |               [Jira](https://www.atlassian.com/software/jira)               |
|    ドキュメント管理    |         [Confluence](https://www.atlassian.com/software/confluence)         |
|   コミュニケーション   |                      [Slack](https://slack.com/about)                       |

#### 開発チーム構成

|          主な役割          | 人数 |
| :------------------------: | :--: |
|  バックエンド開発リーダー  |  1   |
| フロントエンド開発リーダー |  1   |

計：2 名

#### Links

|                                     |                 URL                 |
| :---------------------------------: | :---------------------------------: |
|  GitHub リポジトリ（バックエンド）  | https://github.com/daydule/backend  |
| GitHub リポジトリ（フロントエンド） | https://github.com/daydule/frontend |
|          daydule（本製品）          |            近日公開予定             |

### アプリケーションのイメージ

<img src='daydule_image.png'>

**※2023/5/1 現在のスクリーンショットです**

### 私が担当していること

- 企画
- 要件定義
- 技術選定
- 基本設計
- 詳細設計
- フロントエンド, バックエンドの実装
  - フロントエンド開発リーダー
- 開発環境構築
- テスト
- 運用保守

### 2023/4/30 までの実績

- 知人, 友人への需要調査アンケート実施
- 要件定義書の作成（[Confluence](https://www.atlassian.com/software/confluence)）
- 利用する技術やツールの選定
- 画面遷移図を作成（[Confluence](https://www.atlassian.com/software/confluence)）
- 機能仕様書と画面仕様書で合計約 70 ページを作成（[Confluence](https://www.atlassian.com/software/confluence)）
- ER 図で DB 設計（[Confluence](https://www.atlassian.com/software/confluence)）
- デザイン, プロトタイプの作成（[Figma](https://www.figma.com/about/)）
- バックエンド, フロントエンド, データベースの開発環境構築（Docker）
- RestAPI とテストコードで合計約 15 個の実装
- バックエンドの各テーブル用の汎用的なバリデーション処理の実装
- ログイン・サインアップ・ユーザー設定画面の実装
- メイン機能のための画面の初期版の実装

### 今後の展望

- β 版の運用
- 製品版
  - 実装
  - テスト
  - 運用
  - マーケティング
  - マネタイズ
  - 機能追加

## 動画を自動で編集できる アプリケーション開発

_期間：2020/10 〜 2021/1_

### 概要

大学の卒業研究として、動画を自動で編集できる GUI アプリケーション **VIDEDI** を一人で開発しました。

**VIDEDI** の由来は、Video と Editor です。

#### 技術スタック

|                    |                                                                    |
| :----------------: | :----------------------------------------------------------------: |
|        GUI         | Python / [Tkinter](https://docs.python.org/3/library/tkinter.html) |
|    exe 化ツール    |         [PyInstaller](https://pyinstaller.org/en/stable/)          |
|      動画処理      |                   [FFmpeg](https://ffmpeg.org/)                    |
|      音声認識      |                     [wit.ai](https://wit.ai/)                      |
|   バージョン管理   |                                Git                                 |
| リモートリポジトリ |                               GitHub                               |
| 開発時の PC の OS  |                                Mac                                 |

### 開発の背景

趣味でやっていた動画編集で、カットや字幕付けに時間がかかりすぎていました。
そこで自動で編集できないかと考えて調査し、実際に一人で開発しました。

### VIDEDI の仕様

- GUI アプリケーション
- 機能
  - 無音部分自動カット
  - 音声認識/字幕付け
  - 自動編集手直し
  - 字幕色変更

### アプリケーションのイメージ

<video src='発表(概要)_jumpcut_subtitle.mp4' controls></video>

**※卒業発表で利用した動画の一部です**

**※この説明動画も VIDEDI で編集しています**

## tom-takeru Web の開発

_期間：2023/4 〜 現在まで継続中_

### 概要

tom-takeru について紹介するためのサイトです（本サイトです）。

#### 技術スタック

|                          |                                                                   |
| :----------------------: | :---------------------------------------------------------------: |
|       バックエンド       |                               なし                                |
|      フロントエンド      | TypeScript / React, Next.js, tailwindcss, Redux, ESLint, Prettier |
|       開発インフラ       |         [Docker](https://www.docker.com/) / dev container         |
|       ホスティング       |                [Vercel](https://vercel.com/about)                 |
|    開発時の PC の OS     |                                Mac                                |
|      バージョン管理      |                                Git                                |
|    リモートリポジトリ    |                              GitHub                               |
| 背景でループしている動画 |                             Replicate                             |

#### Links

|                            |                          URL                           |
| :------------------------: | :----------------------------------------------------: |
|     GitHub リポジトリ      | https://github.com/tom-takeru/job-history-introduction |
| tom-takeru Web（本番環境） |      https://job-history-introduction.vercel.app       |
