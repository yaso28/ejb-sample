<!-- omit in toc -->
# EJB Sample

## プログラム

- [ejb1](ejb1/)
  - [開発履歴](history-ejb1.md)
- [ui1](ui1/)
  - [開発履歴](history-ui1.md)

開発環境：Java 8

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
kustomize build kustomize/overlays/dev-ui1-1-ejb1-1 | kubectl apply
 -f -
```

```bash
kustomize build kustomize/overlays/dev-ui1-1-ejb1-3 | kubectl apply
 -f -
```

## 動作確認

```bash
curl <URL:PORT>/ui1/info
```
