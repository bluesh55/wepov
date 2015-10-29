class Comment < ActiveRecord::Base
  belongs_to :debate
  belongs_to :user
  belongs_to :comment
end
