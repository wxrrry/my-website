document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');
    
    // Анимация для карточек
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
let images = ["../images/img1.jpg", "../images/img2.jpg", "../images/img3.jpg"];
let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("mainImage").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("mainImage").src = images[index];
}
