//Bai 4
//Mo hình 3 khoi
// -Dau vao:
// +Nhập vào chiều dài
// +Nhập vào chiều rộng
// -Xu ly:
// + Dùng DOM truy xuất trực tiếp thông qua id tinhDTCV của button bắt sự kiện onclick gán cho hàm xử lý các sự kiện bên dưới)
// + Tạo biến chieuDai (Dùng DOM truy xuất trực tiếp thông qua id chieuDai lấy value do người dùng nhâp vào gán vào biến vừa tạo) => ép kiểu number
// + Tạo biến chieuRong (Dùng DOM truy xuất trực tiếp thông qua id chieuRong lấy value do người dùng nhâp vào gán vào biến vừa tạo) => ép kiểu number
// + Tạo biến dienTichHCN = 0
// + Tạo biến chuViHCN = 0
// + dienTichHCN = chieuDai * chieuRong
// + chuViHCM = (chieuDai + chieuRong) * 2
// + Dùng DOM truy xuất thông qua id ketQuaDTCV lấy value gán với (dienTichHCN) và (chuViHCN) để xuất kết quả
// + Dùng event chặn load trang
// -Dau ra:
// +dienTichHCN = ?
// +chuViHCN = ?

document.getElementById("tinhDTCV").onclick = function (event) {
  event.preventDefault();
  var chieuDai = Number(document.getElementById("chieuDai").value);
  var chieuRong = Number(document.getElementById("chieuRong").value);
  var dienTichHCN = 0;
  var chuViHCN = 0;
  dienTichHCN = chieuDai * chieuRong;
  chuViHCN = (chieuDai + chieuRong) * 2;
  document.getElementById("ketQuaDTCV").value =
    "Diện tích: " + dienTichHCN + "; " + ("Chu vi: " + chuViHCN);
};
