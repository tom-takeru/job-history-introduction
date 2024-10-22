# Another Activities

## [Habitat Hub](https://www.habitat-hub.com)でのサービス企画・開発・運用

_期間：2022/8 〜_

### 概要

2022 年 8 月から、開発チーム "Habitat Hub" でいくつかのサービスをリリースしています。
詳しくは、 https://www.habitat-hub.com をご覧ください。

## tom-takeru Web の開発

_期間：2023/4 〜_

### 概要

tom-takeru について紹介するためのサイトです（本サイトです）。

#### 技術スタック

|                    |                                                                                                                        |
| :----------------: | :--------------------------------------------------------------------------------------------------------------------: |
|    バックエンド    |                                                          なし                                                          |
|   フロントエンド   |                              TypeScript / React, Next.js, Tailwind CSS, ESLint, Prettier                               |
|    開発インフラ    | <a target="_blank" rel="noopener noreferrer" href='https://www.docker.com/' target="_blank">Docker</a> / Dev Container |
|    ホスティング    |        <a target="_blank" rel="noopener noreferrer" href='https://vercel.com/about' target="_blank">Vercel</a>         |
| 開発時の PC の OS  |                                                          Mac                                                           |
|   バージョン管理   |                                                          Git                                                           |
| リモートリポジトリ |                                                         GitHub                                                         |
|      背景画像      |                                                        DALL·E 3                                                        |
|                    |

#### Links

|                            |                          URL                           |
| :------------------------: | :----------------------------------------------------: |
|     GitHub リポジトリ      | https://github.com/tom-takeru/job-history-introduction |
| tom-takeru Web（本番環境） |      https://job-history-introduction.vercel.app       |

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

### アプリケーションを動かしている様子

<video src='発表(概要)_jumpcut_subtitle.mp4' controls></video>

**※卒業発表で利用した動画の一部です。**

**※この説明動画も VIDEDI で編集しています。**
