# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email: "1@a.com", password: "12341234", password_confirmation: "12341234")
User.create(email: "2@a.com", password: "12341234", password_confirmation: "12341234")
Debate.create(user_id: 1, title: "111", content: "111content")
Debate.create(user_id: 2, title: "222", content: "222content")
Point.create(user_id: 1, debate_id: 1, title: "1 user 1 debate")
Point.create(user_id: 1, debate_id: 2, title: "1 user 2 debate")
Point.create(user_id: 2, debate_id: 1, title: "2 user 1 debate")
Point.create(user_id: 2, debate_id: 2, title: "2 user 2 debate")
Reason.create(user_id: 1, point_id: 1, title: "1 user 1 point", content: "hi", is_pros: true)
Reason.create(user_id: 1, point_id: 1, title: "1 user 1 point", content: "hi", is_pros: false)
Reason.create(user_id: 1, point_id: 2, title: "1 user 2 point", content: "hi", is_pros: true)
Reason.create(user_id: 1, point_id: 2, title: "1 user 2 point", content: "hi", is_pros: false)
Reason.create(user_id: 2, point_id: 3, title: "1 user 1 point", content: "hi", is_pros: true)
Reason.create(user_id: 2, point_id: 3, title: "1 user 1 point", content: "hi", is_pros: false)
Reason.create(user_id: 2, point_id: 4, title: "1 user 1 point", content: "hi", is_pros: true)
Reason.create(user_id: 2, point_id: 4, title: "1 user 1 point", content: "hi", is_pros: false)
