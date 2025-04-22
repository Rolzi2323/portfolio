// Анимация карточек проектов
function initCardAnimations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.setProperty('--i', index);
    });
  }
  
  // Проверка видимости элементов для анимаций
  function checkVisibility() {
    const elements = document.querySelectorAll('.section');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.75;
      if (isVisible) {
        el.classList.add('visible');
      }
    });
  }
  
  // Инициализация всех анимаций
  function initAnimations() {
    initCardAnimations();
    
    // Первая проверка при загрузке
    checkVisibility();
    
    // Обработчики событий
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
  }
  
  // Запуск после полной загрузки DOM
  document.addEventListener('DOMContentLoaded', initAnimations);