# Another Activities

## daydule 開発

_期間：2022/8 〜 現在まで継続中_

### 概要

2022 年 8 月から現在まで継続して、Web アプリケーション「daydule」の開発プロジェクトを進めています。
このプロジェクトでは、一日の予定と TODO から自動的にスケジュールを作成するアプリケーション「daydule」を開発しています。
企画当初は私と大学時代の友人の 2 名でしたが、現在は開発メンバーを 2 名増員して 4 名体制で開発を進めています。
2023 年 8 月にはベータ版の運用を開始します。

#### 技術スタック

|                        |                                                                                                                                                  |
| :--------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
|      バックエンド      |                                                               JavaScript / Express                                                               |
|     フロントエンド     | TypeScript / React, Next.js, <a target="_blank" rel="noopener noreferrer" href='https://redux-toolkit.js.org/' target="_blank">Redux ToolKit</a> |
|        スタイル        |                  <a target="_blank" rel="noopener noreferrer" href='https://tailwindcss.com/' target="_blank">Tailwind CSS</a>                   |
|      データベース      |                                                                    PostgreSQL                                                                    |
|        インフラ        |                      <a target="_blank" rel="noopener noreferrer" href='https://www.docker.com/' target="_blank">Docker</a>                      |
| フロントエンドサーバー |                     <a target="_blank" rel="noopener noreferrer" href='https://vercel.com/about' target="_blank">Vercel</a>                      |
|  バックエンドサーバー  |                     <a target="_blank" rel="noopener noreferrer" href='https://render.com/about' target="_blank">Render</a>                      |
|   開発時の PC の OS    |                                                                       Mac                                                                        |
|        デザイン        |                    <a target="_blank" rel="noopener noreferrer" href='https://www.figma.com/about/' target="_blank">Figma</a>                    |
|     バージョン管理     |                                                                       Git                                                                        |
|   リモートリポジトリ   |                                                                      GitHub                                                                      |
|       タスク管理       |               <a target="_blank" rel="noopener noreferrer" href='https://www.atlassian.com/software/jira' target="_blank">Jira</a>               |
|    ドキュメント管理    |         <a target="_blank" rel="noopener noreferrer" href='https://www.atlassian.com/software/confluence' target="_blank">Confluence</a>         |
|   コミュニケーション   |                      <a target="_blank" rel="noopener noreferrer" href='https://slack.com/about' target="_blank">Slack</a>                       |

#### 開発チーム構成

|        主な役割        | 人数 |
| :--------------------: | :--: |
|  バックエンドリーダー  |  1   |
| フロントエンドリーダー |  1   |
|      開発メンバー      |  2   |

計：4 名

#### Links

|                                     |                 URL                 |
| :---------------------------------: | :---------------------------------: |
|  GitHub リポジトリ（バックエンド）  | https://github.com/daydule/backend  |
| GitHub リポジトリ（フロントエンド） | https://github.com/daydule/frontend |
|        daydule サービス URL         |    https://frontend.daydule.net     |

### アプリケーションのイメージ

<img src='dayduleImage.png'>

**※2023/10/30 現在のスクリーンショットです。**

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
- 要件定義書の作成（Confluence）
- 利用する技術やツールの選定
- 画面遷移図を作成（Confluence）
- 機能仕様書と画面仕様書で合計約 70 ページを作成（Confluence）
- ER 図で DB 設計（Confluence）
- デザイン, プロトタイプの作成（Figma）
- バックエンド, フロントエンド, データベースの開発環境構築（Docker）
- RestAPI とテストコードで合計約 15 個の実装
- バックエンドの各テーブル用の汎用的なバリデーション処理の実装
- ログイン・サインアップ・ユーザー設定画面の実装
- メイン機能のための画面の実装
- ベータ版運用のためのホスティングサービスへの各デプロイ

### 今後の展望

- β 版の運用
- 製品版
  - 実装
  - テスト
  - 運用
  - マーケティング
  - マネタイズ
  - 機能追加

## VIDEDI 開発

_期間：2020/10 〜 2021/1_

### 概要

大学の卒業研究として、動画を自動で編集できる GUI アプリケーション **VIDEDI** を開発しました。

**VIDEDI** の由来は、Video と Editor です。

#### 技術スタック

|                    |                                                                                                                                         |
| :----------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|        GUI         | Python / <a target="_blank" rel="noopener noreferrer" href='https://docs.python.org/3/library/tkinter.html' target="_blank">Tkinter</a> |
|    exe 化ツール    |         <a target="_blank" rel="noopener noreferrer" href='https://pyinstaller.org/en/stable/' target="_blank">PyInstaller</a>          |
|      動画処理      |                   <a target="_blank" rel="noopener noreferrer" href='https://ffmpeg.org/' target="_blank">FFmpeg</a>                    |
|      音声認識      |                     <a target="_blank" rel="noopener noreferrer" href='https://wit.ai/' target="_blank">wit.ai</a>                      |
|   バージョン管理   |                                                                   Git                                                                   |
| リモートリポジトリ |                                                                 GitHub                                                                  |
| 開発時の PC の OS  |                                                                   Mac                                                                   |

### 開発の背景

趣味でやっていた動画編集で、カットや字幕付けのために長い作業時間が必要という課題がありました。
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

|                          |                                                                                                                        |
| :----------------------: | :--------------------------------------------------------------------------------------------------------------------: |
|       バックエンド       |                                                          なし                                                          |
|      フロントエンド      |                              TypeScript / React, Next.js, Tailwind CSS, ESLint, Prettier                               |
|       開発インフラ       | <a target="_blank" rel="noopener noreferrer" href='https://www.docker.com/' target="_blank">Docker</a> / Dev Container |
|       ホスティング       |        <a target="_blank" rel="noopener noreferrer" href='https://vercel.com/about' target="_blank">Vercel</a>         |
|    開発時の PC の OS     |                                                          Mac                                                           |
|      バージョン管理      |                                                          Git                                                           |
|    リモートリポジトリ    |                                                         GitHub                                                         |
| 背景でループしている動画 |                                                       Replicate                                                        |

#### Links

|                            |                          URL                           |
| :------------------------: | :----------------------------------------------------: |
|     GitHub リポジトリ      | https://github.com/tom-takeru/job-history-introduction |
| tom-takeru Web（本番環境） |          <a href='/top' target="_blank"></a>           |
