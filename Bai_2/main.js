// Bai 2
// Mo hinh 3 khoi
// -Dau vao:
// + Người dùng nhập vào số thứ 1
// + Người dùng nhập vào số thứ 2
// + Người dùng nhập vào số thứ 3
// + Người dùng nhập vào số thứ 4
// + Người dùng nhập vào số thứ 5
// -Xu ly:
// + Dùng DOM truy xuất trực tiếp thông qua id tinhTrungBinh của button bắt sự kiện onclick gán với hàm để xử lý tiếp các sự kiện bên dưới
// + Tạo biến soThuNhat (Dùng DOM truy xuất trực tiếp thông qua id soThuNhat lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
// + Tạo biến soThuHai (Dùng DOM truy xuất trực tiếp thông qua id soThuHai lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
// + Tạo biến soThuBa (Dùng DOM truy xuất trực tiếp thông qua id soThuBa lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
// + Tạo biến soThuTu (Dùng DOM truy xuất trực tiếp thông qua id soThuTu lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
// + Tạo biến soThuNam (Dùng DOM truy xuất trực tiếp thông qua id soThuNam lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
// + Tạo biến trungBinh = 0
// + trungBInh = (soThuNhat + soThuHai + soThuBa +soThuTu + soThuNam) / 5
// + Dùng DOM truy xuất trực tiếp thông qua id trungBinh của thẻ input lấy value gán với biến ketQua vừa tính bên trên để in kết quả ra
// + Dùng event chặn load trang
// -Dau ra:
// + trungBinh = ?

document.getElementById("tinhTrungBinh").onclick = function (event) {
  event.preventDefault();
  var soThuNhat = Number(document.getElementById("soThuNhat").value);
  var soThuHai = Number(document.getElementById("soThuHai").value);
  var soThuBa = Number(document.getElementById("soThuBa").value);
  var soThuTu = Number(document.getElementById("soThuTu").value);
  var soThuNam = Number(document.getElementById("soThuNam").value);
  var trungBinh = 0;
  trungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("trungBinh").value = trungBinh;
};
