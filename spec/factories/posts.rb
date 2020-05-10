FactoryBot.define do

  factory :post do
    text               {Faker::Restaurant.name}
    image              {File.open("#{Rails.root}/public/icon_brand.png")}
    group
    user
  end

end
