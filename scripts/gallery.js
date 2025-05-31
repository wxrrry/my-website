// Данные галереи
const galleryData = [
    {
        src: "../images/cat1.jpg",
        title: "Милый котенок",
        description: "Маленький пушистый котенок играет с игрушкой"
    },
    {
        src: "../images/cat2.jpg",
        title: "Спящий котик",
        description: "Котик сладко спит в уютном месте"
    },
    {
        src: "../images/cat3.jpg",
        title: "Игривый кот",
        description: "Активный кот играет с мячиком"
    },
    {
        src: "../images/cat4.jpg",
        title: "Котик на окне",
        description: "Любопытный котик наблюдает за птичками"
    },
    {
        src: "../images/cat5.jpg",
        title: "Пушистый друг",
        description: "Красивый пушистый котик в домашней обстановке"
    },
    {
        src: "../images/cat6.jpg",
        title: "Котик и цветы",
        description: "Котик среди весенних цветов"
    },
    {
        src: "../images/cat7.jpg",
        title: "Котик-исследователь",
        description: "Любознательный котик изучает новую игрушку"
    },
    {
        src: "../images/cat8.jpg",
        title: "Семейство котиков",
        description: "Мама-кошка с котятами"
    }
];

let currentIndex = 0;

// Функция для отображения изображения
function showImage(index) {
    const mainImage = document.getElementById('mainImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageDescription = document.getElementById('imageDescription');
    const currentImageCounter = document.getElementById('currentImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Обновляем главное изображение
    mainImage.src = galleryData[index].src;
    imageTitle.textContent = galleryData[index].title;
    imageDescription.textContent = galleryData[index].description;
    currentImageCounter.textContent = index + 1;

    // Обновляем активную миниатюру
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

// Функции навигации
function nextImage() {
    const nextIndex = (currentIndex + 1) % galleryData.length;
    showImage(nextIndex);
}

function prevImage() {
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    showImage(prevIndex);
}

// Обработчики событий для полноэкранного режима
const mainImage = document.getElementById('mainImage');
const modal = document.getElementById('fullscreen-modal');
const modalImage = document.getElementById('fullscreen-image');
const closeModal = document.querySelector('.close-modal');

mainImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = mainImage.src;
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Обработчик клавиатуры
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            prevImage();
            modalImage.src = mainImage.src;
        } else if (e.key === 'ArrowRight') {
            nextImage();
            modalImage.src = mainImage.src;
        } else if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    } else {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Инициализация галереи
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('totalImages').textContent = galleryData.length;
    showImage(0);
}); 