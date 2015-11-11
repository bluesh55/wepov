json.is_signed !@user.nil?
json.brand_image_url image_url('logo.png')

if @user
  json.id @user.id
  json.name @user.name
end
