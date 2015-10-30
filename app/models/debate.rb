class Debate < ActiveRecord::Base
  mount_uploader :image, DebateThumbUploader

  belongs_to :user
  has_many :comments
  has_many :points
end
