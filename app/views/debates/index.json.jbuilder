json.array!(@debates) do |debate|
  json.extract! debate, :id, :user_id, :title, :image, :content, :pros_count, :cons_count, :priority, :is_visible

  json.created_at debate.created_at.in_time_zone('Seoul').strftime('%B %d %Y')

  json.comments_count debate.comments.length

  json.url debate_url(debate, format: :json)
end
