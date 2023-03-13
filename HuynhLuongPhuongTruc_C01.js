function printPersonInfo(name, yearOfBirth, zodiac) {
  console.log(`Ten: ${name}`);
  console.log(`Nam sinh: ${yearOfBirth}`);
  console.log(`Cung hoang dao: ${zodiac}`);
}

console.log("Bai 1:")
printPersonInfo('Huynh Luong Phuong Truc', 1999, 'Xu Nu');
console.log("\n\n")


function tinhToan(a, b, c) {
  if (c === 0) {
    return "Khong the chia cho 0";
  }

  return (a ** 2 * b ** 2) / c;
}

console.log("Bai 2:")
console.log(`Phep chia 3 so voi a=5, b=2, c=10: ` + tinhToan(5, 2, 10)); // 10
console.log(`Phep chia 3 so voi a=0, b=3, c=7: ` + tinhToan(0, 3, 7)); // 0
console.log(`Phep chia 3 so voi a=-4, b=6, c=2: ` + tinhToan(-4, 6, 2)); // 288
console.log(`Phep chia 3 so voi a=8, b=1, c=0: ` + tinhToan(8, 1, 0)); // Khong the chia cho 0
console.log(`Phep chia 3 so voi a=2, b=2, c=0.5: ` + tinhToan(2, 2, 0.5)); // 32
console.log("\n\n")


function tinhHinhTron(r, PI) {
  if (r < 0) {
    return "Ban kinh khong hop le";
  }

  const chuVi = 2 * r * PI;
  const dienTich = r ** 2 * PI;

  return `Ban kinh: ${r}, Pi: ${PI}, Chu vi: ${chuVi}, Dien tich: ${dienTich}`;
}

console.log("Bai 3:")
console.log(tinhHinhTron(5, 3.14));
console.log(tinhHinhTron(1, 3.14));
console.log(tinhHinhTron(4, 3.14));
console.log(tinhHinhTron(-2, 3.14));
console.log(tinhHinhTron(0, 3.14));
console.log(tinhHinhTron(1/2, 3.14));
console.log("\n\n")


function tinhTien(sl, donGia) {
  const tien = sl * donGia;
  const thue = tien * 0.1;

  console.log(`Tien = ${tien}`);
  console.log(`Thue gia tri gia tang = ${thue}`);
}

console.log("Bai 4:")
console.log("sl = 5, donGia = 4000: ");
tinhTien(5, 4000); 
console.log("sl = 1, donGia = 5000: ");
tinhTien(1, 5000); 
console.log("sl = 15, donGia = 0: ");
tinhTien(15, 0); 
console.log("sl = 0, donGia = 10000: ");
tinhTien(0, 10000); 
console.log("sl = 1/2, donGia = 3400: ");
tinhTien(1/2, 3400); 
console.log("\n\n")


function demNuts(a) {
  let digitSum = 0;
  while (a > 0) {
    digitSum += a % 10;
    a = Math.floor(a / 10);
  }

  return digitSum % 9 + 1;
}

let testCases = [23984, 3452, 4394, 71390, 22222];

console.log("Bai 5:")
for (let i = 0; i < testCases.length; i++) {
  let input = testCases[i];
  let result = demNuts(input);
  console.log(`Dem nut: Input: ${input}, Output: ${result}`);
}
console.log("\n\n")


function doiGio(s) {
    console.log(`Thoi gian ban dau: ${s} giay`);
    const gio = Math.floor(s / 3600);
    const phut = Math.floor((s % 3600) / 60);
    const giay = s % 60;

    console.log(`Thoi gian da doi: ${gio}:${phut}:${giay}`);
}
  
console.log("Bai 6:")
doiGio(1000);
doiGio(3984);
doiGio(452);
doiGio(294);
doiGio(7146);
doiGio(1122);
console.log("\n\n")


function tinhKhoangCach(a1, a2, b1, b2) {
    const distance = Math.sqrt((b1 - a1) ** 2 + (b2 - a2) ** 2);
    console.log(`Khoang cach giua (${a1}, ${a2}) va (${b1}, ${b2}) la: ${distance}`);
}

console.log("Bai 7:")
tinhKhoangCach(0, 0, 3, 4);
tinhKhoangCach(2, 4, 5, 7);
tinhKhoangCach(1, 0, 3, 8);
tinhKhoangCach(-2, -1, 1, 4);
tinhKhoangCach(-4, 0, 7, 9);
tinhKhoangCach(3, -3, 1, 0);
console.log("\n\n")


function hoanVi(a, b) {
    // sử dụng biến tạm để hoán vị
    let temp = a;
    a = b;
    b = temp;
    // trả về mảng mới đã hoán vị
    return [a, b];
}

console.log("Bai 8:")
let [c, d] = hoanVi(1, 0);
console.log(`Hoan vi (${1}, ${0}) = (${c}, ${d})`);

[c, d] = hoanVi(3, -1);
console.log(`Hoan vi (${3}, ${-1}) = (${c}, ${d})`);

console.log("\n\n")


function tinhS(x, y) {
  // tính giá trị S theo công thức
  const S = (Math.sqrt(x) + Math.abs(x)) / Math.sqrt(Math.pow(x, y));
  return S;
}

console.log("Bai 9:")
console.log(`Giá trị S của x=${9}, y=${2} là: ` + tinhS(9, 2));
console.log(`Giá trị S của x=${25}, y=${4} là: ` + tinhS(25, 4));
console.log(`Giá trị S của x=${4}, y=${5} là: ` + tinhS(4, 5));
console.log(`Giá trị S của x=${9}, y=${0} là: ` + tinhS(9, 0));
