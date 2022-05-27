const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },  
  });