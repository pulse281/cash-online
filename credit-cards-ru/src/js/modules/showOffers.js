const showOffersAll = () => {
    const btnShowOffers = document.querySelector('.btn_show-offers'),
    hidenOffers = document.querySelectorAll('[data-hide]');
    
    hidenOffers.forEach(item => {
        item.classList.add('offer-hide'); 
    });

    btnShowOffers.addEventListener('click', (e) => {
        hidenOffers.forEach(item => {
            item.classList.add('animate__animated', 'animate__fadeIn');
            item.classList.remove('offer-hide');
            e.target.classList.add('hide');
        });
    });

   /*  btnShowOffers.addEventListener('click', (e) => {
        gtag('event', 'click', {
            'event_category': 'show offer',
            'event_label': 'показать все'
        });
     

    }); */

};

export default showOffersAll;