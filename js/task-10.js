function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const controlsDiv = document.getElementById('controls');
  const input = controlsDiv.querySelector('input');
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const boxesDiv = document.getElementById('boxes');

  createButton.addEventListener('click', function() {
    const amount = Number(input.value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      return;
    }

    const boxes = [];

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const color = getRandomHexColor();
      const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
      boxes.push(box);
    }

    boxesDiv.innerHTML = boxes.join('');
  });

  destroyButton.addEventListener('click', function() {
    boxesDiv.innerHTML = '';
  });