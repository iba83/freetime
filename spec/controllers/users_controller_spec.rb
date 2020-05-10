require 'rails_helper'

describe UsersController do
  let(:group) {create(:group)}
  let(:post) {create(:post)}
  let(:comment) {create(:comment)}

  describe 'GET #show' do
    it "show.html.hamlに遷移すること" do
      user = create(:user)
      get :show, params: {id:user}
      expect(response).to render_template :show
    end
  end

end