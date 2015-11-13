class Debate < ActiveRecord::Base
  mount_uploader :image, DebateThumbUploader

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :points, dependent: :destroy

  def main_comments
    self.comments.where(comment_id: nil)
  end
end
