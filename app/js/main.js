// Установка title !!! ДЛЯ CMS НЕ ПОНАДОБИТЬСЯ (начало)

if (!document.title) {
    if (document.location.pathname === '/') { document.title = 'Главная' };
    if (document.location.pathname === '/start.html') { document.title = 'С чего начать?' };
    if (document.location.pathname === '/404.html') { document.title = 'Страница не найдена' };
    if (document.location.pathname === '/terms.html') { document.title = 'Условия торговли' };
    if (document.location.pathname === '/terms-of-trade.html') { document.title = 'Условия торговли' };
    if (document.location.pathname === '/platform.html') { document.title = 'Торговая платформа' };
    if (document.location.pathname === '/strategies.html') { document.title = 'Торговые стратегии' };
    if (document.location.pathname === '/schedule.html') { document.title = 'Часы работы рынка' };
    if (document.location.pathname === '/analytics.html') { document.title = 'Аналитика рынка' };
    if (document.location.pathname === '/review.html') { document.title = 'Обзор рынка' };
    if (document.location.pathname === '/condition.html') { document.title = 'Состояние рынка' };
    if (document.location.pathname === '/calendar.html') { document.title = 'Экономический календарь' };
    if (document.location.pathname === '/news.html') { document.title = 'Новости рынка' };
    if (document.location.pathname === '/forecasts.html') { document.title = 'Прогнозы рынка' };
    if (document.location.pathname === '/currencies.html') { document.title = 'Валюты' };
    if (document.location.pathname === '/cryptocurrencies.html') { document.title = 'Криптовалюты' };
    if (document.location.pathname === '/stocks.html') { document.title = 'Акции' };
    if (document.location.pathname === '/ies.html') { document.title = 'Индексы' };
    if (document.location.pathname === '/raw-materials.html') { document.title = 'Сырье' };
    if (document.location.pathname === '/history.html') { document.title = 'История компании' };
    if (document.location.pathname === '/why.html') { document.title = 'Почему мы?' };
    if (document.location.pathname === '/documents.html') { document.title = 'Документы' };
    if (document.location.pathname === '/about.html') { document.title = 'О Patronus Investments' };
    if (document.location.pathname === '/contacts.html') { document.title = 'Контакты' };
}


// Установка title (конец)

// кнопка вверх (начало)

$(window).on('scroll', trackScroll);
$('.upButton').on('click', backToTop);
$('.header__logo').on('click', backToTop);
$('.footer__logo').on('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;

    if (scrolled > 100) {
        $('.upButton').addClass('show')
    }
    if (scrolled < 100) {
        $('.upButton').removeClass('show')
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// кнопка вверх (конец)

// окно с предупреждением о куки (начало)

function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options,
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
    }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue
        }
    }

    document.cookie = updatedCookie
}

if (!getCookie('cookies')) {
    document.querySelector('.cookies').style = 'display: flex'
}

document.querySelector('.cookies .btn').addEventListener('click', () => {
    document.querySelector('.cookies').style = 'display: none'
    setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
})

// окно с предупреждением о куки (конец)

// мобильное меню (начало)

let menuItem = $('.header .menu > .menu-item')
let subMenu = $('.header .menu > .menu-item .sub-menu')

function openMainPage() { window.open('/', '_self') }

if (document.location.pathname === '/404.html') {
    $('.header__logo').on('click', openMainPage)
    $('.footer__logo').on('click', openMainPage)
};

if ($(window).width() <= 1200) {

    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('active');
        $('.header__nav').toggleClass('active');
    })

    $('.upButton').on('click', function () {
        $('.header__burger').removeClass('active');
        $('.header__nav').removeClass('active');
    });

    $('.header .menu-item').on('click', function () {
        $('.header__burger').removeClass('active');
        $('.header__nav').removeClass('active');
    });

    $('.header__logo').on('click', function () {
        $('.header__burger').removeClass('active');
        $('.header__nav').removeClass('active');
    });
}

// мобильное меню (конец)

let swiper1 = new Swiper(".swiper1", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper2 = new Swiper(".swiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper1,
    },
});

let swiper3 = new Swiper(".swiper3", {
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        550: {
            slidesPerView: 1.1,
        },
        700: {
            slidesPerView: 1.5,
        },
        950: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiper4 = new Swiper('.swiper4', {
    spaceBetween: 20,

    breakpoints: {
        500: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        950: {
            slidesPerView: 3,
        },
    },

    pagination: {
        el: '.swiper-pagination',
    },
});

let swiper5 = new Swiper(".swiper5", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper6 = new Swiper(".swiper6", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper5,
    },
});

// аккордеон (начало)

$(document).ready(function () {
    $('.faq__list > li > .answer').hide();

    $('.faq__list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".faq__list > li.active .answer").slideUp();
            $(".faq__list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

});

// аккордеон (конец)

// плавная прокрутка до якоря (начало)

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// плавная прокрутка до якоря (конец)