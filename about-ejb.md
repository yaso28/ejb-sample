<!-- omit in toc -->
# リモートEJBに関する考察

> EJBまわりの実装はEJB2.1という古い仕様に準拠しています。最新仕様のEJB3.1には準拠していません。

メニュー

- [EJB2.1](#ejb21)
  - [プログラム](#プログラム)
  - [Liberty実行環境](#liberty実行環境)
- [EJB2.1クライアント](#ejb21クライアント)
  - [プログラム](#プログラム-1)
  - [Liberty実行環境](#liberty実行環境-1)

## EJB2.1

### プログラム

リモートEJBを実装するには、下記3つを作成します。

- Remoteインターフェース
  - `javax.ejb.EJBObject`を継承
  - [Info2Service.java](ejb1/ejbModule/com/yaso/ejb1/Info2Service.java)
- 実装
  - `javax.ejb.SessionBean`を継承
  - [Info2ServiceBean.java](ejb1/ejbModule/com/yaso/ejb1/Info2ServiceBean.java)
- Homeインターフェース
  - `javax.ejb.EJBHome`を継承
  - [Info2ServiceHome.java](ejb1/ejbModule/com/yaso/ejb1/Info2ServiceHome.java)

さらにデプロイメント記述[ejb-jar.xml](ejb1/ejbModule/META-INF/ejb-jar.xml)を作成します。

これによって、`Info2Service`という名前のEJBがデプロイされます。

### Liberty実行環境

[server.xml](docker/ejb1/server.xml)に、`<iiopEndpoint>`タグおよび`<ejbApplication>`タグを記述します。

これによって、`Info2Service`のHomeインスタンスが`corbaname::ejb1:2829#ejb/global/ejb1/Info2Service!com.yaso.ejb1.Info2ServiceHome`というJNDIバインディング名で公開されます。

なお`<iiopEndpoint>`タグで`host="ejb1"`とするに当たり、Pod内部で`ejb1`というホスト名が自分自身に名前解決される必要があります。そのために[deployment.yaml](kustomize/base/deployment.yaml)にて、`hostname: ejb1`という箇所でホスト名を設定しています。

> デフォルトのホスト名はPod名と一致します。デフォルトのままではPod内部で`ejb1`が自分自身に名前解決されず、Homeインターフェースの公開がエラーで失敗します。

> ホスト名を`ejb1`に設定した代わりに、環境変数`PODNAME`をPod名に[deployment.yaml](kustomize/base/deployment.yaml)にて設定しています。この環境変数`PODNAME`は、アクセスしたPodを判別するためにプログラムで使用しています。

## EJB2.1クライアント

### プログラム

[web.xml](ui1/src/main/webapp/WEB-INF/web.xml)にて、`<ejb-ref>`タグを記述し、`ejb/Info2Service`という名前のEJB参照を作成します。

[InfoServlet.java](ui1/src/main/java/com/yaso/ui1/InfoServlet.java)にて、`java:comp/env/ejb/Info2Service`というJNDI名でリモートEJBのHomeインスタンスをlookupして取得したのち、EJBをcreateして使用しています。

`java:comp/env/ejb/Info2Service`というJNDI名が、`ejb/Info2Service`という名前のEJB参照に対応します。この`ejb/Info2Service`というEJB参照がどのHomeインスタンスにバインディングされるかは、実行環境によります。

### Liberty実行環境

[server.xml](docker/ui1/server.xml)の`<web-bnd>`タグにて、`ejb/Info2Service`という名前のEJB参照が、`corbaname::ejb1:2829#ejb/global/ejb1/Info2Service!com.yaso.ejb1.Info2ServiceHome`というJNDIバインディング名で公開されたHomeインスタンスにバインディングされます。

ui1のPodで`ejb1`というホスト名は同名のServiceに名前解決されるため、ui1のPodで`ejb1:2829`にアクセスすると、ejb1というService経由で、ejb1というPodが公開しているHomeインスタンスを取得できます。
