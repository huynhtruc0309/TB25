console.log("Bài 1: In tên người thương")
console.log("JavaScript - \"I love you\"");
console.log("\n")

console.log("Bài 2: Tổng bình phương")
a = 2;
b = 4;
sumSquares = a*a + b*b;
console.log(sumSquares);
console.log("\n")

console.log("Bài 3: Lời chào")
myName = "Kmin";
console.log(`Hi, ${myName}!`);
console.log("\n")

console.log("Bài 4: Phép cộng và phép chia")
a = 3;
b = 2;
sum = a + b;
quotient = a / b;

console.log(`a + b = ${sum}`);
console.log(`a / b = ${quotient}`);

a = 3;
b = 0;
sum = a + b;
quotient = a / b;

console.log(`a + b = ${sum}`);
console.log(`a / b = ${quotient}`);

console.log("\n")

console.log("Bài 5: Đổi nhiệt độ")
F = 32;
C = (5/9) * (F - 32);
console.log(C);
console.log("\n")

console.log("Bài 6: Tách số")
num = 183;
ones = num % 10;
tens = Math.floor(num / 10) % 10;
hundreds = Math.floor(num / 100);

console.log(`Đơn vị: ${ones}`);
console.log(`Chục: ${tens}`);
console.log(`Trăm: ${hundreds}`);
console.log("\n")

console.log("Bài 7: Tính căn bậc hai")
x = 4;
y = 2;
S = Math.sqrt(Math.pow(x, y));
console.log(S);