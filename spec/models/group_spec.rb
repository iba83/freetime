require "rails_helper"
describe Group do
  describe "#create" do
    it "nameがない場合は登録できないこと" do
      group = build(:group, name: "")
      group.valid?
      expect(group.errors[:name]).to include("を入力してください")
    end
  end
end