//Bai 5
//Mo hinh 3 khoi
// -Dau vao:
// +Nhập vào số có 2 chữ số
// -Xu ly:
// + Dùng DOM truy xuất trực tiếp thông qua id tinhTong2KySo của button bắt sự kiện onclick gán cho hàm xử lý các sự kiện bên dưới)
// +Tạo biến soHangDV = 0
// +Tạo biến soHangChuc = 0
// +Tạo biến tong2KySo = 0
// +Tạo biến so2ChuSo (Dùng DOM truy xuất trực tiếp thông qua id so2ChuSo lấy value do người dùng nhâp vào gán vào biến vừa tạo) => ép kiểu number
// +soHangDV = so2ChuSo % 10
// +soHangChuc = so2ChuSo / 10 => Làm tròn số
// +tong2KySo = soHangDV + soHangChuc
// +Dùng DOM truy xuất thông qua id ketQuaTong2KySo lấy value gán với biến tong2KySo để xuất kết quả
// +Dùng event chặn load trang
//-Dau ra:
//+tong2KySo = ?

document.getElementById("tinhTong2KySo").onclick = function (event) {
  event.preventDefault();
  var soHangDV = 0;
  var soHangChuc = 0;
  var tong2KySo = 0;
  var so2ChuSo = Number(document.getElementById("so2ChuSo").value);
  soHangDV = so2ChuSo % 10;
  soHangChuc = Math.floor(so2ChuSo / 10);
  tong2KySo = soHangDV + soHangChuc;
  document.getElementById("ketQuaTong2KySo").value = tong2KySo;
};
