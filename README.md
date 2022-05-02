<!-- omit in toc -->
# EJB Sample

リモートEJBに関する考察は[こちら](about-ejb.md)

## プログラム

- [ejb1](ejb1/)
  - [開発履歴](history-ejb1.md)
- [ui1](ui1/)
  - [開発履歴](history-ui1.md)

開発環境：Java 8

ビルド手順は[こちら](how-to-build.md)

## Docker

> 各`.sh`ファイルは`chmod +x ***.sh`で実行可能にしてから利用してください。

ビルドしたモジュールをdockerディレクトリにコピー

```bash
./docker/copy-modules.sh
```

ベースイメージ

```bash
./docker/base/build.sh
```

ejb1

```bash
./docker/ejb1/build.sh
```

ui1

```bash
./docker/ui1/build.sh
```

リネーム

```bash
./docker/rename-mdboetco-azurecr-io.sh
```

## Kubernetes

```bash
kustomize build kustomize/overlays/dev-ui1-1-ejb1-1 | kubectl apply -f -
```

```bash
kustomize build kustomize/overlays/dev-ui1-1-ejb1-3 | kubectl apply -f -
```

## 動作確認

```bash
curl <URL:PORT>/ui1/info
```

## テストプログラム

- [tester](tester/)
  - [開発履歴](history-tester.md)

インストール

```bash
cd tester
npm ci
```

環境変数設定

```bash
cp .env.example
```

コピーした`.envファイルを編集します。

ui1 infoテスト

```bash
node index.js ui1 info
```

- オプション
  - `-c`
    - API呼び出し回数
    - デフォルト：100回
  - `-s`
    - APIを飛び出す間隔（ms）
    - デフォルト：100ms

オプションを使った例

```bash
node index.js ui1 info -c 10 -s 1000
node index.js ui1 info -h # ヘルプ表示
```
