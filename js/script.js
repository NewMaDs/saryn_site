const burger = document.getElementById('burgerToggle');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('show');

  if (isOpen) {
    // Убираем .show в следующем кадре
    requestAnimationFrame(() => {
      mobileMenu.classList.remove('show');
      mobileMenu.classList.add('hide');
    });

    burger.classList.remove('open');

    // После завершения анимации скрываем элемент
    setTimeout(() => {
      mobileMenu.classList.add('d-none');
      mobileMenu.classList.remove('hide');
    }, 300);
  } else {
    // Убираем d-none и добавляем .show в следующем кадре
    mobileMenu.classList.remove('d-none');

    requestAnimationFrame(() => {
      mobileMenu.classList.add('show');
    });

    burger.classList.add('open');
  }
});
