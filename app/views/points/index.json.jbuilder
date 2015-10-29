json.array!(@points) do |point|
  json.extract! point, :id, :user_id, :debate_id, :title, :priority, :is_visible
  json.url point_url(point, format: :json)
end
