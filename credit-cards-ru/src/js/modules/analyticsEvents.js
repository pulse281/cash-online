const analyticsEvents = () => {

    //Scroll

    const pageHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight),

          doc = document.documentElement;

    const firstScroll = () => {
        gtag('event', 'scroll', {
            'event_category': 'first_scroll'
        });
        document.removeEventListener('scroll', firstScroll);

    };

    document.addEventListener('scroll', firstScroll);

    let scrollCounter = 0,
    scroll = 0,
    point = 10;
    
    document.addEventListener('scroll', (e) => {
        if (doc.scrollTop > scrollCounter) {
            scroll = Math.round((doc.scrollTop + doc.clientHeight) / pageHeight * 100);
            scrollCounter = doc.scrollTop;

           if (scroll > point) {
                gtag('event', 'scroll', {
                    'event_category': 'scroll_counter',
                    'event_label': `${point}%`
                });
                point += 10; 
           }
                   
        }
        
    });


    //Click

    const catalog = document.querySelector('.catalog__list');

    catalog.addEventListener('click', (e) => {
        const target = e.target.classList;

        if (target.contains('btn_offer-request')) {
            gtag('event', 'click', {
                'event_category': 'offer',
                'event_label': e.target.closest('.offer').getAttribute('data-name')
            });
        }

        if (target.contains('btn_show-offers')) {
            gtag('event', 'click', {
                'event_category': 'show_all'
            });
        }
    });


};
export default analyticsEvents;