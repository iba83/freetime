# README

# freetime888

## アプリ概要
- ユーザー登録機能
- ユーザー情報編集機能
- ログイン・ログアウト機能
- 写真、テキストの投稿機能
- 記事編集機能
- カテゴリー作成機能
- ユーザー同士フォロー機能
- 記事へのコメント機能
- ユーザー検索機能
- 記事検索機能
- カテゴリー機能
- 記事投稿数ランキング機能　

## 本番環境
デプロイ先 : https://freetime888.herokuapp.com/  
テストアカウント  
ユーザーID : user1234  
パスワード : a9a9a9a9

## 制作背景
私自身、趣味がほしいと思うことがあり、インターネットで検索することがありました。  
検索すると「おすすめな趣味◯選」「おすすめな趣味一覧」といった記事がヒットし、趣味について説明されたものがたくさんありましたが、実際に自分がその趣味を楽しむ姿が想像できませんでした。  
そこで、趣味を楽しむ人達は具体的にどんなことをしているのかを知ることができれば、興味を持ちやすいのではないかと考え、今回のアプリケーションの開発を決めました。
まず、趣味を探している人と趣味を楽しんでいる人、両者に需要があるものにしたいと思い、下記の条件を満たすものを考えました。
- 趣味を探している人には「どんな趣味なんだろう」「楽しそう」と興味を持ってもらうことができる
- 趣味を楽しんでいる人にはその趣味に対して新しい楽しみ方が見つかる
この2点から記事を投稿し、その記事を閲覧、コメントできる機能を実装することで条件を満たせると考え、記事投稿、閲覧、コメント機能に加え、投稿時にカテゴリータグをつけることで趣味に特化した記事投稿アプリケーションを開発しました。

## 工夫したポイント
### 検索機能
トップ画面の検索欄にキーワードを打ち込むとユーザー、カテゴリー、記事ごとに検索結果が表示されることで検索結果の視認性の向上をはかりました。
### トップ画面のカテゴリーボタンの色
視覚から趣味のバラエティの豊かさや、楽しそうな雰囲気が伝わるようにリロードするごとにボタンの色がランダムで変わるよう実装しました。

## 使用技術
- haml
- scss
- Ruby on rails
- jquery

## 今後の実装したい機能
- 記事に対してのお気に入り機能
- お気に入り数のランキング機能
- 一つの記事に対して複数枚写真を登録できる機能

<a href="https://gyazo.com/edaf365d4cdaac2713966fbd54e9def1"><img src="https://i.gyazo.com/edaf365d4cdaac2713966fbd54e9def1.gif" alt="Image from Gyazo" width="1000"/></a>
<a href="https://gyazo.com/c3da47fbd34079fd9605f37db95aa88d"><img src="https://i.gyazo.com/c3da47fbd34079fd9605f37db95aa88d.gif" alt="Image from Gyazo" width="998"/></a>

## DB設計

### usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
#### Association
- has_many :posts
- has_many :comments
- has_many :follows
- has_many :followings, through: :follows, source: :follow
- has_many :reverse_of_follows, class_name: "Follow", foreign_key: "follow_id"
- has_many :followers, through: :reverse_of_follows, source: :user

### postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
#### Association
- has_many :comments
- belongs_to :user
- belongs_to :group

### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
#### Association
- has_many :posts

### commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|post_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
#### Association
- belongs_to :post
- belongs_to :user

### followsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|follow_id|references|null: false, foreign_key: true|
#### Association
- belongs_to :user
- belongs_to :follow, class_name: "User"
