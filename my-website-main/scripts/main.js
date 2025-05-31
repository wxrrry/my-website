document.addEventListener('DOMContentLoaded', () => {
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

    // Анимация появления элементов при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Наблюдаем за карточками
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация для кнопок
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Добавляем класс для анимации при загрузке страницы
    document.body.classList.add('loaded');
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

// обработчик формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
        this.reset();
    });
}

