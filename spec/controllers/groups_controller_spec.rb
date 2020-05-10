require 'rails_helper'

describe GroupsController do
  let(:post) {create(:post)}
  let(:comment) {create(:comment)}
  let(:user) {create(:user)}

  describe 'GET #new' do
    it "new.html.hamlに遷移すること" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe 'GET #show' do
    it "show.html.hamlに遷移すること" do
      group = create(:group)
      get :show, params: {id:group}
      expect(response).to render_template :show
    end
  end


end