function roll() {
    let inputMin: HTMLInputElement = <HTMLInputElement>document.getElementById('min');
    let inputMax: HTMLInputElement = <HTMLInputElement>document.getElementById('max');
    let resultElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('result');
  
    const min: number = Number(inputMin.value);
    const max: number = Number(inputMax.value);
    
    if (min >= max) {
        resultElement.innerText = 'Vui lòng nhập min nhỏ hơn max';
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.innerText = `${randomNumber}`;
}