json.extract!  @debate, :id, :user_id, :title, :image, :content, :pros_count, :cons_count, :priority, :is_visible, :created_at, :updated_at

json.name @debate.user.name

json.points @debate.points do |p|
  json.title p.title
  json.visible p.is_visible
  json.priority p.priority
  json.reasons p.reasons.select([:id, :user_id, :title, :content, :priority, :is_visible])
end
