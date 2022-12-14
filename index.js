//Bài tập 1: Tính tiền lương nhân viên
//input: nhập lương 1 ngày và số ngày đi làm
let luong1ngay = 100000;
let songaylam = 26;
//xử lí: tính lương trên số ngày làm việc
let luong = 0;
luong = luong1ngay * songaylam;
//output
console.log("Tổng lương =", luong);

// Bài tập 2: tính giá trị trung bình
//input: nhập vào 5 số thực
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
// xử lí: tính trung bình của năm số
let giatritrungbinh = (a + b + c + d +e) / 5
//output
console.log("Gía trị trung bình của 5 số thực là", giatritrungbinh);

// Bài tập 3: Quy đổi tiền
//input
let giaUSD = 23500;
let nguoidungdoi = 4;
// xử lí: tính số tiền quy đổi
let tiendoira = nguoidungdoi * giaUSD
//output
console.log("Gia tiền sau khi đổi 4USD ra tiền Việt Nam là", tiendoira);

//Bài tập 4: tính diện tích và chu vi hình chữ nhật 
//input
let chieudai = 4
let chieurong = 2
//output
let chuvi = 0
let dientich = 0
//progress
chuvi = (chieudai + chieurong) * 2
dientich = chieudai * chieurong

console.log("Chu vi hình chữ nhật là", chuvi)
console.log("Diện tích hình chữ nhật là", dientich)

//Bài tập 5: tính tổng hai kí số
//input
let number = 12
//output
let total = 0
//progress
total += number % 10
number = Math.floor(number / 10)
total += number

console.log("Tổng hai kí số là", total)