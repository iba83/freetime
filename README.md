# README

# freetime888

## アプリ概要
- ユーザー登録機能
- ログイン・ログアウト機能
- 写真、テキストの投稿機能
- 記事編集機能
- カテゴリー作成機能
- ユーザー同士フォロー機能
- 記事へのコメント機能

## 本番環境
デプロイ先 : https://freetime888.herokuapp.com/ 
テストアカウント
ユーザーID : user1234
パスワード : a9a9a9a9

## 制作背景
「趣味はなんですか」と聞かれて答えられないことが多いので、いろんな人の趣味を知ることのできるアプリがあればいいなと思い、制作しました。

## 工夫したポイント
リロードするごとに変わるボタンの色  viewからバラエティ豊かで楽しい雰囲気が伝わればいいなと思い、ボタンの色をランダムに変わるようにしました。

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
