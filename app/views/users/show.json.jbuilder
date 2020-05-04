json.array! @category do |post|
  json.text post.text
  json.image post.image
  json.comments post.comments
  json.created_at post.created_at
end