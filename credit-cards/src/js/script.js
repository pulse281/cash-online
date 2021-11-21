"use strict";

const progress = document.querySelector('.progress__line'),
    body = document.querySelector('body');

window.addEventListener('scroll', () => {
    let scrollID = (window.pageYOffset / (body.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = scrollID + '%';
});

//menu hamurger

const hamburger = document.querySelector('.hamburger'),
    hamburgerItem = hamburger.querySelectorAll('.hamburger__item'),
    menu = document.querySelector('.menu-mobile');
hamburger.addEventListener('click', (e) => {
    if (menu.classList.contains('menu-mobile_active')) {
        document.body.style.overflow = '';
        menu.classList.remove('menu-mobile_active');
        hamburgerItem[1].classList.remove('hide');
        hamburgerItem[0].classList.remove('hamburger__item_left');
        hamburgerItem[2].classList.remove('hamburger__item_right');
    } else {
        menu.classList.add('menu-mobile_active');
        document.body.style.overflow = 'hidden';
        hamburgerItem[1].classList.add('hide');
        hamburgerItem[0].classList.add('hamburger__item_left');
        hamburgerItem[2].classList.add('hamburger__item_right');
    }
});




//analitycs action

const offerBtn = document.querySelectorAll('.btn_offer-request'),
    offer = document.querySelectorAll('.offer');

offerBtn.forEach((index, i) => {
    index.addEventListener('click', (e) => {
        gtag('event', 'click', {
            'event_category': 'offer',
            'event_label': offer[i].dataset.name
        });
    });
});


//scroll

window.addEventListener('scroll', startScroll);

function startScroll() {
    gtag('event', 'page scroll', {
        'event_category': 'first scroll',
        'event_label': 'first scroll'
    });
    window.removeEventListener('scroll', startScroll);
}

let scrollCount = 0;

window.addEventListener('scroll', pageScroll);

function pageScroll() {
    let pageHeight = document.body.scrollHeight,
        a = Math.round(window.pageYOffset / pageHeight * 100);

    if (scrollCount < a) {
        scrollCount = a;
        scrollAmount(scrollCount);
    }
}

function scrollAmount(arg) {
    if (arg == 10) {
        gtag('event', 'page scroll', {
            'event_category': 'scroll',
            'event_label': arg + '%'
        });
        ++scrollCount;
    } else if (arg == 25) {
        gtag('event', 'page scroll', {
            'event_category': 'scroll',
            'event_label': arg + '%'
        });
        showAsideOffer();
        ++scrollCount;
    } else if (arg == 50) {
        gtag('event', 'page scroll', {
            'event_category': 'scroll',
            'event_label': arg + '%'
        });
        ++scrollCount;
    } else if (arg == 90) {
        gtag('event', 'page scroll', {
            'event_category': 'scroll',
            'event_label': 'end'
        });
        window.removeEventListener('scroll', pageScroll);
    }
}