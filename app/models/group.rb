class Group < ApplicationRecord
  has_many :posts

  validates :name, presence: true

  def self.search(search)
    if search
      self.where("name LIKE(?)", "%#{search}%")
    else
      return nil
    end
  end

end
