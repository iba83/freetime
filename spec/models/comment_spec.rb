require "rails_helper"
describe Comment do
  describe "#create" do
    it "textがない場合は登録できないこと" do
      comment = build(:comment, text: "")
      comment.valid?
      expect(comment.errors[:text]).to include("を入力してください")
    end
  end
end