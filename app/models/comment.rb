class Comment < ActiveRecord::Base
  belongs_to :debate
  belongs_to :user

  has_many :comments
  belongs_to :comment
end
