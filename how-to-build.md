<!-- omit in toc -->
# ビルド手順

- [開発環境](#開発環境)
  - [Mavenを動かすJavaのバージョンについて](#mavenを動かすjavaのバージョンについて)
- [非公開artifactをローカルMavenリポジトリにインストール](#非公開artifactをローカルmavenリポジトリにインストール)
- [ビルド](#ビルド)

## 開発環境

- Java8
- Maven

上記2つをインストールします。

### Mavenを動かすJavaのバージョンについて

下記コマンドでMaven関連のバージョンを確認します。

```bash
mvn -v
```

Java versionが「1.8.x...」となっている場合はOKです。

そうでない場合、Mavenでビルドする際にJavaのバージョンが8とは異なるため、エラーになるケースがあります。MavenをJava 8で動かすには、環境変数JAVA_HOMEでJava 8を指定する必要があります。

まず下記コマンドでjava homeを確認します。

```bash
/usr/libexec/java_home -V
```

例として下記の出力が返ってきた場合：

```
Matching Java Virtual Machines (1):
    1.8.0_322 (x86_64) "International Business Machines Corporation" - "OpenJDK 8" /Library/Java/JavaVirtualMachines/ibm-semeru-open-8.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/ibm-semeru-open-8.jdk/Contents/Home
```

この場合は、`/Library/Java/JavaVirtualMachines/ibm-semeru-open-8.jdk/Contents/Home`を環境変数JAVA_HOMEに設定すれば、Java 8でMavenが動作します。

環境変数JAVA_HOMEを設定します。

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/ibm-semeru-open-8.jdk/Contents/Home
```

設定後、再びMaven関連のバージョンを確認します。

```bash
mvn -v
```

Java versionが「1.8.x...」となっている事を確認します。

もしくは`mvn`コマンドを実行するたびに環境変数JAVA_HOMEを指定することもできます。

```bash
JAVA_HOME=/Library/Java/JavaVirtualMachines/ibm-semeru-open-8.jdk/Contents/Home mvn -v
```

## 非公開artifactをローカルMavenリポジトリにインストール

[lib](lib/)ディレクトリにある非公開artifactをローカルMavenリポジトリにインストールします。

[ui](ui/)ディレクトリに移動したのち、下記コマンドを実行します。

> `-Dfile`の引数には、jarファイルの「絶対パス」を指定する必要があります。

```bash
mvn install:install-file -Dfile=＜libディレクトリの絶対パス＞/com.ibm.websphere.javaee.ejb.3.2_1.0.49.jar -DgroupId=com.ibm.websphere.javaee.ejb -DartifactId=ejb.3.2 -Dversion=21.0.0.2 -Dpackaging=jar
```

```bash
mvn install:install-file -Dfile=＜libディレクトリの絶対パス＞/com.ibm.websphere.javaee.servlet.4.0_1.0.49.jar -DgroupId=com.ibm.websphere.javaee.servlet -DartifactId=servlet.4.0 -Dversion=21.0.0.2 -Dpackaging=jar
```

## ビルド

[ejb1](ejb1/)ディレクトリに移動したのち、下記コマンドを実行します。

```bash
mvn clean install
```

これによって、

- `ejb1/target/ejb1.jar`ファイルがビルドされます。
- ローカルMavenリポジトリにejb1がインストールされます。

[ui1](ui1/)ディレクトリに移動したのち、下記コマンドを実行します。

```bash
mvn clean install
```

> `パッケージjavax.rmiは存在しません`エラーになる場合は、[こちら](#mavenを動かすjavaのバージョンについて)の手順を参考にして、Java 8でMavenを実行するようにしてください。

これによって、

- `ui1/target/ui1.war`ファイルがビルドされます。
- ローカルMavenリポジトリにui1がインストールされます。
