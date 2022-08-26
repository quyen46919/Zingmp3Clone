### VISIT WEBSITE

https://zingmp3-clone-seven.vercel.app/

### CLONE PROJECT

git clone https://github.com/quyen46919/Zingmp3Clone

### RUN PROJECT

run index.html

### CÀI ĐẶT SCSS

0. Cài scss global
   npm install -g sass
1. Code css trong file scss ở folder tương ứng, chạy lệnh generate:
   Vd: sass index.scss index.css --watch
2. Xóa file index.css.map được tạo ra trước khi commit

### LƯU Ý

0. Sử dụng biến, mixins đã khai báo trong folder scss, nếu chưa có mà phải sử dụng nhiều chỗ thì phải khai báo
1. không được merge code trực tiếp, chỉ được tạo pull request, Project manager sẽ là người duy nhất được merge
2. Khi CI/CD fail, phải sửa lại code cho success trước khi báo cho PM review
