// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация при прокрутке
const statsObserverOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 50px 0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, statsObserverOptions);

const worksObserverOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 100px 0px'
};

const worksObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, worksObserverOptions);

document.querySelectorAll('.work-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    worksObserver.observe(el);
});
document.querySelectorAll('.stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    statsObserver.observe(el);
});
// Загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт загружен');

    // Активная ссылка в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Оптимизация загрузки картинок
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.work-image img');

    images.forEach(img => {
        // Добавляем родителю класс loading
        const parent = img.parentElement;
        parent.classList.add('loading');

        // Когда картинка загрузилась - убираем скелетон
        img.onload = () => {
            parent.classList.remove('loading');
        };

        // Если картинка уже загружена из кэша
        if (img.complete) {
            parent.classList.remove('loading');
        }
    });
});