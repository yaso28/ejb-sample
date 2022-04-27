<!-- omit in toc -->
# history ejb1

upper is newer.

- [implemented Info2Service ejb](#implemented-info2service-ejb)
- [converted to Maven project](#converted-to-maven-project)
- [created project](#created-project)

## implemented Info2Service ejb

- Eclipse: pom.xml 依存関係＞追加
  - javax.ejb
  - ejb-api
  - 3.0
  - provided
- added
  - ejb1/ejbModule/com/yaso/ejb1/Info2Service.java
  - ejb1/ejbModule/com/yaso/ejb1/Info2ServiceBean.java
  - ejb1/ejbModule/com/yaso/ejb1/Info2ServiceHome.java
- edited
  - ejb1/ejbModule/META-INF/ejb-jar.xml

## converted to Maven project

- Eclipse: プロジェクト右クリック＞構成＞Mavenプロジェクトへ変換
  - グループID
    - com.yaso.sample
  - アーティファクトID
    - ejb1

## created project

- Eclipse: 新規＞EJBプロジェクト
  - プロジェクト名
    - ejb1
  - EJBモジュールバージョン
    - 3.2
  - EARにプロジェクトを追加
    - OFF
  - ejb-jar.xmlデプロイメント記述子の生成
    - ON
