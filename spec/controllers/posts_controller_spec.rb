require 'rails_helper'

describe PostsController do
  let(:group) {create(:group)}
  let(:comment) {create(:comment)}
  let(:user) {create(:user)}

  describe 'GET #index' do
    it "index.html.hamlに遷移すること" do
      get :index
      expect(response).to render_template :index
    end
  end

  describe 'GET #new' do
    it "new.html.hamlに遷移すること" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe 'GET #show' do
    it "show.html.hamlに遷移すること" do
      post = create(:post)
      get :show, params: {id:post}
      expect(response).to render_template :show
    end
  end

  describe 'GET #edit' do
    it "edit.html.hamlに遷移すること" do
      post = create(:post)
      get :edit, params: {id:post}
      expect(response).to render_template :edit
    end
  end

end