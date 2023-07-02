 const fontSizeControl = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  fontSizeControl.addEventListener('input', function() {
    const fontSize = fontSizeControl.value + 'px';
    textSpan.style.fontSize = fontSize;
  });

  // Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.