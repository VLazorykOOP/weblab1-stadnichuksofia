

function runTask() {
  // Отримання поточного часу
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Формування рядка з інформацією про час
  const timeInfo = 'Час звернення до сторінки: ' + hours + ':' + minutes + ':' + seconds;

  // Отримання текстового поля за його ідентифікатором
  const outputTextarea = document.getElementById('outputTextarea');

  // Виведення інформації в текстове поле
  outputTextarea.value = timeInfo;
}

function bigImg(x) {
  x.style.height = "540px";
  x.style.width = "540px";
}

function normalImg(x) {
  x.style.height = "420px";
  x.style.width = "420px";
}

function searchNumbers() {
  const inputText = document.getElementById('outputTextarea-7-5').value;
  const regex = /\b\d+\b/g; // Регулярний вираз для знаходження цілих чисел
  const matches = inputText.match(regex);
  matches
    ? document.getElementById('result-7-5').innerHTML = 'Знайдені цілі числа: ' + matches.join(', ')
    : document.getElementById('result-7-5').innerHTML = 'Цілих чисел не знайдено.';
}

function processArray() {
  const inputArray = document.getElementById('arrayInput-7-6').value.split(' ').map(Number);
  const resultArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < 0) {
      resultArray.push(inputArray[i]);
    }
  }

  document.getElementById('result-7-6').value = 'Масив B із від\'ємних елементів: ' + resultArray.join(', ');
}


