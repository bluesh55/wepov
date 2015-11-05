class User < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, presence: true, length: {maximum: 255}, format: {with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i}, uniqueness: {case_sensitive: false}

  has_many :debates
  has_many :vote_histories, class_name: 'Vote', dependent: :destroy
  has_many :voted_debates, through: :vote_histories, source: :debate
  has_many :points
  has_many :reasons

end
