// Bai 3
// Mo hinh 3 khoi
// -Dau vao:
// + giá USD
// + Nhap vào số tiền USD
// -Xu ly:
// + Tạo biến giaUSD = 23500
// + Dùng DOM truy xuất trực tiếp thông qua id tinhTienQuyDoi của button bắt sự kiện onclick gán cho hàm xử lý các sự kiện bên dưới)
// + Tạo biến soTienUSD (Dùng DOM truy xuất trực tiếp thông qua id soTienUSD lấy value do người dùng nhâp vào gán vào biến vừa tạo)
// + Tạo biến soTienVND = 0
// + soTienVND = soTienUSD * 23500
// + Dùng DOM truy xuất qua id tienQuyDoi lấy value gán với biến soTuenVND vừa tính => dùng thêm NumberFormat
// -Dau ra:
// +soTienVND = ?
var giaUSD = 23500;
document.getElementById("tinhTienQuyDoi").onclick = function (event) {
  event.preventDefault();
  var soTienUSD = document.getElementById("soTienUSD").value;
  var soTienVND = 0;
  soTienVND = soTienUSD * 23500;
  document.getElementById("tienQuyDoi").value = new Intl.NumberFormat(
    "vn-VN"
  ).format(soTienVND);
};
