is_signed_in = !current_user.nil?

json.name @user.name
json.email @user.email
json.intro @user.intro
json.avatar @user.avatar.url

json.debates @user_debates do |debate|
  json.id debate.id
  json.title debate.title
  json.isMine is_signed_in && (debate.user_id == current_user.id)
  json.points debate.points do |point|
    json.id point.id
    json.title point.title
    json.isMine is_signed_in && (point.user_id == current_user.id)
    json.reasons point.reasons.select(|e| e.user_id == current_user.id) do |reason|
      json.id reason.id
      json.title reason.title
      json.isPros reason.is_pros
    end
  end
end

json.votedDebates @user_votes do |vote|
  debate = vote.debate
  json.id debate.id
  json.title debate.title
  json.image debate.image.url
  json.comments_count debate.comments.count
  json.points_count debate.points.count
  json.pros_count debate.pros_count
  json.cons_count debate.cons_count
  json.isPros vote.is_pros
end
