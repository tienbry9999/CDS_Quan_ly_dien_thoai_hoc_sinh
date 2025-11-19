<h2 align="center"> 
     <a href="https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin"> 
     🎓 Faculty of Information Technology (DaiNam University) 
     </a> 
 </h2> 
 <h2 align="center"> 
    ỨNG DỤNG GIÁM SÁT VÀ CẢNH BÁO THỜI GIAN SỬ DỤNG ĐIỆN THOẠI
 </h2> 
 <div align="center"> 
     <p align="center"> 
         <img alt="AIoTLab Logo" width="170" src="https://github.com/user-attachments/assets/711a2cd8-7eb4-4dae-9d90-12c0a0a208a2" /> 
         <img alt="AIoTLab Logo" width="180" src="https://github.com/user-attachments/assets/dc2ef2b8-9a70-4cfa-9b4b-f6c2f25f1660" /> 
         <img alt="DaiNam University Logo" width="200" src="https://github.com/user-attachments/assets/77fe0fd1-2e55-4032-be3c-b1a705a1b574" /> 
     </p> 

 [![AIoTLab](https://img.shields.io/badge/AIoTLab-green?style=for-the-badge)](https://www.facebook.com/DNUAIoTLab) 
 [![Faculty of Information Technology](https://img.shields.io/badge/Faculty%20of%20Information%20T…he-badge)](https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin) 
 [![DaiNam University](https://img.shields.io/badge/DaiNam%20University-orange?style=for-the-badge)](https://dainam.edu.vn) 
 
 </div> 

---

## 🧩 Giới thiệu

**SmartClass Monitor** là hệ thống web hỗ trợ **giảng viên và sinh viên** trong việc **giám sát, cảnh báo và phân tích hành vi sử dụng điện thoại** trong lớp học – một vấn đề nổi bật trong bối cảnh **chuyển đổi số trong giáo dục**.

Hệ thống giúp:
- Theo dõi **thời gian sử dụng điện thoại** của sinh viên theo thời gian thực.  
- Gửi **cảnh báo tự động** khi sinh viên vượt quá giới hạn sử dụng cho phép.  
- Cung cấp **báo cáo và biểu đồ thống kê** hành vi học tập.  
- Ứng dụng **AI** để phân tích và dự đoán xu hướng mất tập trung.  

## 🎯 Mục tiêu

- **Giám sát thời gian thực** việc sử dụng điện thoại trong lớp học.
- **Cảnh báo thông minh** khi sinh viên vượt ngưỡng cho phép.
- **Phân tích hành vi học tập** bằng mô hình AI.
- **Báo cáo chi tiết** cho giảng viên dưới dạng biểu đồ và file PDF/Excel.
- **Bảo mật và mở rộng** theo chuẩn GDPR và Luật An ninh mạng Việt Nam.

## ⚙️ Kiến trúc hệ thống

Hệ thống được xây dựng theo mô hình **Client–Server 3 tầng**:

ReactJS (Frontend)
↓
Node.js / Express (Backend API + Socket.IO)
↓
MongoDB (Database) + AI Engine (Python Flask)
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
<img width="1894" height="600" alt="image" src="https://github.com/user-attachments/assets/e30c37eb-145e-42b3-a57a-e2c5ec896abe" />

### 🔹 2. Quản lý thiết bị
- Danh sách thiết bị đang kết nối.
- Gán thiết bị cho sinh viên, tìm kiếm theo tên/lớp.
- Cập nhật hoặc xóa thiết bị.
<img width="1813" height="600" alt="image" src="https://github.com/user-attachments/assets/09bc5905-dff4-4224-b7aa-38885fa239bf" />

### 🔹 3. Cảnh báo
- Cảnh báo **real-time** bằng Socket.IO.
- Mức độ cảnh báo: *nhẹ – trung bình – nghiêm trọng*.
- Gửi email khi sinh viên vi phạm nhiều lần.
<img width="1887" height="600" alt="image" src="https://github.com/user-attachments/assets/c72f6914-2cf2-4ce7-a601-5e16f517e85f" />

### 🔹 4. Báo cáo
- Sinh báo cáo định dạng **.pdf** hoặc **.xlsx**.
- Biểu đồ: cột, tròn, heatmap, radar, scatter.
- Báo cáo tự động gửi email hàng tuần.
<img width="1340" height="600" alt="image" src="https://github.com/user-attachments/assets/4b044618-1dc8-423a-9215-fd383baeae56" />
### 🔹 5. Cách chạy dự án

1. **Chạy Backend** (mở Terminal/PowerShell)  
   ```powershell
   cd "D:\BTL_CDS\classguard\classguard\classguard-connect\backend"
   node server.js
→ Thấy Backend: http://localhost:3000 + MongoDB OK! là thành công

2. **Chạy end** (mở Terminal thứ 2)
   ```powershell
   cd "D:\BTL_CDS\classguard\classguard\classguard-connect"
   npm run dev
→ Thấy Local: http://localhost:8080/ là OK
Truy cập hệ thống giảng viên
Mở trình duyệt → http://localhost:8080
→ Dashboard + Trợ lý AI hiện ngay lập tức!

Để có dữ liệu realtime (bắt buộc khi demo):
Mở file test sinh viên trong thư mục public/
→ test-hs001.html, test-hs002.html, ...
→ Nhấn chuột phải → Open with Live Server
→ Hoặc mở bằng Chrome trên điện thoại (cùng wifi)
Xong! Mở TikTok/YouTube/Facebook trên file test → dữ liệu, biểu đồ, cảnh báo và Trợ lý AI sẽ cập nhật tức thì trên màn hình giảng viên

## 6. Thông tin liên hệ  
**Tác giả:** Phạm Văn Duy, Đỗ Trọng Minh Tiến  
**Nhóm 2:** CNTT 16-03  
**Giảng viên hướng dẫn:** Ks. Nguyễn Văn Nhân  
**Khoa:** Công Nghệ Thông Tin – Trường Đại học Đại Nam, Việt Nam
