json.array!(@comments) do |comment|
  json.extract! comment, :id, :debate_id, :user_id, :content, :comment_id, :like_count, :dislike_count, :is_visible
  json.url comment_url(comment, format: :json)
end
