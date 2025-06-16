const li1 = document.querySelector('.first_page-contact ul li:nth-child(1) a');
const targetImg = document.querySelector('.first_page-contact ul li:nth-child(2) a img:nth-child(1)');

  li1.addEventListener('mouseenter', () => {
    targetImg.style.transform = 'scale(0.8)';
  });

  li1.addEventListener('mouseleave', () => {
    targetImg.style.transform = 'scale(1)';
  });
