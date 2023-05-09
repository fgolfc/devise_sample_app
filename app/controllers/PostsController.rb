class PostsController < ApplicationController
  load_and_authorize_resource

  # 以下は通常のアクション（index, show, new, create, edit, update, destroy）
end