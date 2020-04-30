class Post < ApplicationRecord
  belongs_to :user
  belongs_to :group
  has_many :comments

  validates :text, presence: true, unless: :image?
  validates :group_id, presence: true

  scope :search_posts, -> (id){where(user_id: (id))}

  mount_uploader :image, ImageUploader
end
