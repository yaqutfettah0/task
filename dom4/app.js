const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button[data-value]');
  const clearBtn = document.getElementById('clear');
  const equalsBtn = document.getElementById('equals');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      display.value += button.getAttribute('data-value');
    });
  });

  clearBtn.addEventListener('click', () => {
    display.value = '';
  });

  equalsBtn.addEventListener('click', () => {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  });