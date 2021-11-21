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

    const catalog = document.querySelector('.catalog');

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

    const calculator = document.querySelector('.calculator');

    calculator.addEventListener('click', (e) => {
        gtag('event', 'click', {
            'event_category': 'calculator',
            'event_label': e.target.classList.value
        });
    });

    const steps = document.querySelector('.steps');

    steps.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('steps__item') || target.closest('.steps__item')) {
            gtag('event', 'click', {
            'event_category': 'steps',
            'event_label': (target.id || target.closest('.steps__item').id)
        });
            
        }
    });

    const questions = document.querySelector('.questions');

    questions.addEventListener('click', (e) => {
        const target = e.target.closest('.questions__wrapper');
        if (target) {
            document.querySelectorAll('.questions__wrapper').forEach((item, i) => {
                if (target === item) {
                    gtag('event', 'click', {
                        'event_category': 'questions',
                        'event_label': ++i
                    });
                }
            });
        }
     });


    //Mouse 
    
    calculator.addEventListener('mouseenter', (e) => {   //variable creat click event
        gtag('event', 'mouse', {
            'event_category': 'calc_transform'
        });
    });

    const stepsItems = document.querySelectorAll('.steps__item');
    stepsItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
        gtag('event', 'mouse', {
            'event_category': 'steps_transform',
            'event_label': e.target.id
            });
        });
    });


};
export default analyticsEvents;