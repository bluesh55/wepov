class Reason < ActiveRecord::Base
  belongs_to :user
  belongs_to :point
  #delegate :debate, to: :point # two queries
  has_one :debate, through: :point # one query
end
