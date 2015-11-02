class Debate < ActiveRecord::Base
  mount_uploader :image, DebateThumbUploader

  belongs_to :user
  has_many :comments
  has_many :points

  def main_comments
    self.comments.where(comment_id: nil)
  end
end
