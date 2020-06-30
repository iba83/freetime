class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy
  belongs_to :group
  has_many :comments
  has_many :images, dependent: :destroy

  validates :text, presence: true, unless: :image?

  scope :search_posts, -> (id){where(user_id: (id))}

  def self.rank_group_id
    self.group(:group_id).order("count(group_id) desc").limit(5).pluck(:group_id)
  end
  
  def self.search(search)
    if search
      self.where("text LIKE(?)", "%#{search}%")
    else
      return nil
    end
  end

  def self.searchCategory(id, num)
    if num
      self.where(user_id: id, group_id: num)
    else
      return nil
    end
  end

  def favorites_by(user)
    favorites.where(user_id: user.id).exists?
  end

  mount_uploader :image, ImageUploader
end
