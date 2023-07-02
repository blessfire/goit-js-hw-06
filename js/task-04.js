// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
 // Отримуємо посилання на елементи кнопок, лічильник та його значення
  
const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const counterValueElement = document.getElementById('value');

  // Ініціалізуємо значення лічильника
  let counterValue = 0;
  counterValueElement.textContent = counterValue;

  // Додаємо слухача по кліку до кнопки зменшення
  decrementButton.addEventListener('click', function() {
    counterValue--;
    counterValueElement.textContent = counterValue;
  });

  // Додаємо слухача по кліку до кнопки збільшення
  incrementButton.addEventListener('click', function() {
    counterValue++;
    counterValueElement.textContent = counterValue;
  });
