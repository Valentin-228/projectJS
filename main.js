document.addEventListener('DOMContentLoaded', function () {
    const swiperBrands = new Swiper(
      '.swiper',
      {
        slidesPerView: 'auto',
        loop: true,
  
        pagination: {
          el: '.swiper__pagination',
  
        },
      });
  
  
  
  
  })






document.querySelector('.next-show__btn').addEventListener('click', function() {
  let hiddenElements = document.querySelectorAll('.hidden');
  let imgShow = document.querySelector('.next-show__img');
  let imgHide = document.querySelector('.next-hide__img');

  if (hiddenElements.length > 0) {
      hiddenElements.forEach(function(element) {
          element.classList.remove('hidden'); // Показываем скрытые элементы
      });
      this.innerText = 'Скрыть';
       // Меняем текст кнопки на "Скрыть"
  } else {
      document.querySelectorAll('.slide').forEach(function(element) {
          element.classList.add('hidden'); // Скрываем все элементы
      });
      this.innerText = 'Показать все'; // Меняем текст кнопки на "Показать все"
  }
});

let currentImageIndex = 1; // Индекс текущего изображения

document.querySelector('.next-show__btn').addEventListener('click', function() {
    const currentImage = document.querySelector('.next-show__img');

    // Меняем изображение в зависимости от текущего индекса
    if (currentImageIndex === 1) {
        currentImage.src = 'img/hide.svg'; // Переключаем на второе изображение
        currentImageIndex = 2; // Обновляем индекс
    } else {
        currentImage.src = 'img/show.svg'; // Переключаем на первое изображение
        currentImageIndex = 1; // Обновляем индекс
    }
});




















    



