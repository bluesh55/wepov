class Point < ActiveRecord::Base
  belongs_to :user
  belongs_to :debate
  has_many :reasons, dependent: :destroy

  validates :title, length: {
    in: 5..40,
    too_short: "5자 이상 작성해주세요.",
    too_long: "40자 이하로 작성해주세요."
  }
end
