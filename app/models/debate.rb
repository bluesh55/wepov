class Debate < ActiveRecord::Base
  mount_uploader :image, DebateThumbUploader

  belongs_to :user
  has_many :comments
end
