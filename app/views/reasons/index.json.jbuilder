json.array!(@reasons) do |reason|
  json.extract! reason, :id, :user_id, :point_id, :is_pros, :title, :content, :priority, :is_visible
  json.url reason_url(reason, format: :json)
end
