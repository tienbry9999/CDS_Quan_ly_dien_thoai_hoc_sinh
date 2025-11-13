
### 🧠 Công nghệ sử dụng

| Thành phần | Công nghệ | Mô tả |
|-------------|------------|-------|
| **Frontend** | ReactJS, TailwindCSS, Chart.js | Dashboard trực quan, biểu đồ và thông báo real-time |
| **Backend** | Node.js, Express, Socket.IO | API RESTful, xác thực JWT, cảnh báo thời gian thực |
| **Database** | MongoDB Atlas | Lưu trữ người dùng, thiết bị, cảnh báo, báo cáo |
| **AI Module** | Python (Flask, Scikit-learn, TensorFlow) | Phân tích hành vi và dự đoán mất tập trung |
| **Triển khai** | Vercel (frontend), Railway/VPS (backend), MongoDB Atlas | Hỗ trợ triển khai cloud miễn phí và CI/CD qua GitHub Actions |

---

## 🧱 Chức năng chính

### 🔹 1. Tổng quan
- Hiển thị trạng thái thiết bị đang hoạt động.
- Thống kê tỷ lệ sinh viên tuân thủ quy định.
- Biểu đồ thống kê theo thời gian.
<img width="1887" height="886" alt="image" src="https://github.com/user-attachments/assets/2bc2959d-c74f-4548-98ae-c801769f7df9" />


### 🔹 2. Quản lý thiết bị
- Danh sách thiết bị đang kết nối.
- Gán thiết bị cho sinh viên, tìm kiếm theo tên/lớp.
- Cập nhật hoặc xóa thiết bị.
<img width="1895" height="908" alt="image" src="https://github.com/user-attachments/assets/a7242189-42ae-44ea-8ccf-fd9810077cce" />


### 🔹 3. Cảnh báo
- Cảnh báo **real-time** bằng Socket.IO.
- Mức độ cảnh báo: *nhẹ – trung bình – nghiêm trọng*.
- Gửi email khi sinh viên vi phạm nhiều lần.
<img width="1904" height="917" alt="image" src="https://github.com/user-attachments/assets/95d8c26a-5b1f-48db-bebc-de439853d35f" />


### 🔹 4. Báo cáo
- Sinh báo cáo định dạng **.pdf** hoặc **.xlsx**.
- Biểu đồ: cột, tròn, heatmap, radar, scatter.
- Báo cáo tự động gửi email hàng tuần.
<img width="1902" height="903" alt="image" src="https://github.com/user-attachments/assets/639d51f4-c90a-423f-ba2b-5dce8e5657e6" />

