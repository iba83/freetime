# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :posts
- has_many :comments
- has_many :follows
- has_many :followings, through: :follows, source: :follow
- has_many :reverse_of_follows, class_name: "Follow", foreign_key: "follow_id"
- has_many :followers, through: :reverse_of_follows, source: :user

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
### Association
- has_many :comments
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :posts

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|post_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :user

## followsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|follow_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :follow, class_name: "User"
