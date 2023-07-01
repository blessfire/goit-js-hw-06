const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
      nameOutput.textContent = nameInput.value;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });