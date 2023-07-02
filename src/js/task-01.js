// Отримуємо елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item у списку
const categories = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Ітеруємося по кожній категорії
categories.forEach(category => {
  // Отримуємо заголовок категорії
  const categoryTitle = category.querySelector('h2').textContent;

  // Отримуємо всі елементи li в межах категорії
  const categoryItems = category.querySelectorAll('li');

  // Виводимо заголовок і кількість елементів у категорії
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.