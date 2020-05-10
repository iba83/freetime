FactoryBot.define do

  factory :group do
    name          {Faker::Job.title}
  end

end
