class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :debate

  validates_uniqueness_of :debate_id, scope: :user_id
end
