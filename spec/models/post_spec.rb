require "rails_helper"
describe Post do
  describe "#create" do
    it "textがない場合も登録できること" do
      post = build(:post, text: "")
      expect(post).to be_valid
    end

    it "imageがない場合も登録できること" do
      post = build(:post, image: "")
      expect(post).to be_valid
    end

    it "text,imageがない場合は登録できないこと" do
      post = build(:post, text: "", image: "")
      post.valid?
      expect(post.errors[:text]).to include("を入力してください")
    end

  end
end