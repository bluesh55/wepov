class Point < ActiveRecord::Base
  belongs_to :user
  belongs_to :debate
  has_many :reasons
end
