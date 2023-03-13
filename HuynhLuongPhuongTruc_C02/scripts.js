function roll() {
    var inputMin = document.getElementById('min');
    var inputMax = document.getElementById('max');
    var resultElement = document.getElementById('result');
    var min = Number(inputMin.value);
    var max = Number(inputMax.value);
    if (min >= max) {
        resultElement.innerText = 'Vui lòng nhập min nhỏ hơn max';
        return;
    }
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.innerText = "".concat(randomNumber);
}
