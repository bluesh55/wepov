json.extract!  @debate, :id, :user_id, :title, :image, :content, :pros_count, :cons_count, :priority, :is_visible, :created_at, :updated_at

json.name @debate.user.name
json.cuid current_user.id if current_user

json.points @debate.points do |p|
  json.id p.id
  json.user_id p.user.id
  json.user_name p.user.name
  json.title p.title
  json.visible p.is_visible
  json.priority p.priority
  json.reasons p.reasons.select([:id, :user_id, :title, :content, :priority, :is_visible, :is_pros])
end

json.comments @debate.main_comments do |c|
  json.id c.id
  json.user_id c.user.id
  json.user_name c.user.name
  json.content c.content
  json.like_count c.like_count
  json.dislike_count c.dislike_count
  json.is_visible c.is_visible
  json.date c.updated_at
  json.replies_count c.comments.count

  json.replies c.comments do |reply|
    json.id reply.id
    json.user_name reply.user.name
    json.content reply.content
    json.like_count reply.like_count
    json.dislike_count reply.dislike_count
    json.is_visible reply.is_visible
    json.date reply.updated_at
  end
end

json.isVoted @isVoted
json.isPros @isPros
