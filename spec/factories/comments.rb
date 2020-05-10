FactoryBot.define do

  factory :comment do
    text               {Faker::Restaurant.name}
    post
    user
  end

end
