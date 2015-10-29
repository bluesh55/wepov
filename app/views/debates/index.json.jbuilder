json.array!(@debates) do |debate|
  json.extract! debate, :id, :user_id, :title, :image, :content, :pros_count, :cons_count, :priority, :is_visible
  json.url debate_url(debate, format: :json)
end
