# hello_node

## 概要
このコードは、42tokyoのカリキュラムの中で`learnyounode`という学習モジュールと同様の問題 を解くという課題が出された時に作ったものです。  

課題の大まかの内容は以下の通りです。  

<hr>

- ex00  
標準出力に"HELLO WORLD"を出力させる。  

- ex01  
以下のような文字列を出力させるような文字列を標準出力に表示させる。  
```
42 is a string.
42 is a number.
42 is an object.
[object Object] is an object.
true is a boolean.
undefined is an undefined.
```

- ex02  
1つ以上のコマンドライン引数を受け取り、全てのコマンドライン引数の総和を表示させる。  

- ex03  
`fs.readFileSync`を使用して、`cat file | wc -l`と似たような挙動のコードを作る。

- ex04  
`fs.readFile`を使用して、`cat file | wc -l`と似たような挙動のコードを作る。

- ex05  
コマンドライン引数に受け取ったURLにHTTP GETリクエストを送るようなコードを書く。

- ex06  
コマンドライン引数に受け取ったURLにHTTP GETリクエストを送るようなコードを書く。  
出力時には、取得した文字数を表示させること。  

- ex07  
複数のコマンドライン引数を受け取り、それらのURLにHTTP GETリクエストを送るようなコードを書く。

- ex08  
コマンドライン引数にポート番号を受け取り、そのポート番号にHTTPリクエストを送ると、現在の日付と時刻がk帰ってくるようなAPIを作る。  

- ex09  
コマンドライン引数にポート番号を受け取り、そのポート番号に適切なuriでHTTPリクエストを送ると時刻をJSON形式で返してくるようなAPIを作る。  
（例）
```
curl 'localhost:8080/api/parsetime?iso=2020-12-15T17:10:15.474Z'
```
```
{"hour":17,"minute":10,"second":15}
```
```
curl 'localhost:8080/api/unixtime?iso=2020-12-15T17:10:15.474Z'
```
```
{"unixtime":1608052215474}
```

<hr>

## 目的
node.jsを用いた初めてのコーディングであったため、コールバック関数や、非同期処理についての知見を増やしながら実際に手を動かしながらjavascriptを習得するというのが主な目的でした。  
また、自作のAPIを作成しAPI周辺の知識を増やすことも目的の一つでした。  

## 使い方

それぞれの課題によって、実行方法が異なります。  
ここでは、実行方法の一例を紹介します。  

- ex00  
```
node hello-world.js
```

- ex01
```
node vars.js
```

- ex02  
```
node sum_args.js 1 2 3
```

- ex03
```
node io.js /etc/passwd
```

- ex04  
```
node asnycio.js /etc/passwd
```

- ex05
```
node http-client.js http://www.google.com
```

- ex06
コードを実行するためには、`bl`という外部ライブラリが必要です。  
以下のコマンドを実行してからコードを実行してください。  

```
npm install bl
```

```
node http-collect.js http://www.google.com
```

- ex07  
```
node async-http-collect.js http://www.google.com http://www.youtube.com http://www.gmail.com
```

- ex08  
```
node time-server.js 8080
curl localhost:8080
```

- ex09   
```
node http-json-api-server.js 8080
curl 'localhost:8080/api/parsetime?iso=2020-12-15T17:10:15.474Z'
curl 'localhost:8080/api/unixtime?iso=2020-12-15T17:10:15.474Z'
```

## 開発環境
- macbook pro (15-inch, 2018)
- macos big sur version 11.2.1
- node v12.0.0
