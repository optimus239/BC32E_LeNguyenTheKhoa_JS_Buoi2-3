// Bai 1
// Mo hinh 3 khoi
// -Dau vao:
// + Nhập vào lương một ngày
// + Nhập vào số ngày làm
// -Xu ly:
// + Dùng DOM truy xuất trực tiếp thông qua id tinhLuong của button bắt sự kiện onclick gán với hàm xử lý các sự kiện bên dưới
// + Tạo biến luongMotNgay (Dùng DOM truy xuất trực tiếp thông qua id luongMotNgay của thẻ input Nhập lương một ngày lấy value từ người dùng nhập vào gán vào biến)
// + Tạo biến soNgayLam (Dùng DOM truy xuất trực tiếp thông qua id soNgayLam của thẻ input Số ngày làm lấy value từ người dùng nhập vào gán vào biến)
//+ Tạo biến tienLuong=0
// + tienLuong = luongMotNgay * soNgayLam
// + Dùng DOM truy xuất trực tiếp thông qua id tienLuong lấy value gán với biến tienLuong vừa tính bên trên để hiển thị kết quả ra thẻ input
// + Dùng event ngăn load trang
// -Dau ra:
// + tienLuong = ?

document.getElementById("tinhLuong").onclick = function (event) {
  event.preventDefault();
  var luongMotNgay = document.getElementById("luongMotNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  var tienLuong = 0;
  tienLuong = luongMotNgay * soNgayLam;
  document.getElementById("tienLuong").value = tienLuong;
};
