const list = [{
    title: 'Card title',
    content: `Some quick example text to build on the card
            title and make up the bulk of the cards content`,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  }, {
    title: 'Special title treatment',
    content: `Some quick example text to build on the card 
            title and make up the bulk of the cards content`,
    img: null,
  }]
  
  const news = {
    'Сейчас в СМИ': [
      'Путин упростил получение автомобильных номеров',
      'В команде Зеленского раскрыли план реформ на Украине',
      '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
      'Суд закрыл дело Демпартии США против России',
      'На украине призвали создать ракеты для удара по Москве',
    ],
    
    'В Германии': [],
    'Рекомендуем': [],
  };
  
  const financialNews = [{
    title: 'USD MOEX',
    cource: '63,52',
    exchange: '+0,09',
  }, {
    title: 'EUR MOEX',
    cource: '70,86',
    exchange: '+0,14',
  }, {
    title: 'НЕФТЬ',
    cource: '64,90',
    exchange: '+1,63%',
  },
  ];
  
  const categories = [
    'Видео',
    'Картинки',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
    'еще',
  ];
  
  const articles = [{
    title: 'Погода',
    href: '#',
    img: '',
    temperature: '+17',
    periodTemerature: {
      'Утром': '+17',
      'Днём': '+20',
    }
  }, {
    title: 'Посещаемое',
    href: '#',
    content: {
      'Недвижимость': 'о "сталинках"',
      'Маркет': 'люстры и светильники',
      'Авто.ру': 'привод 4х4 до 500 000',
    }, 
  }, {
    title: 'Карта Германии',
    href: '#',
    content: 'Расписания'
   }, {
    title: 'Телепрограмма',
    href: '#',
    content: [{
      channel: 'THT International',
      time: '02:00',
      programm: 'THT.Best',
    }, {
      channel: 'Карусель INT',
      time: '02:15',
      programm: 'Джинглики',
    }, {
      channel: 'Первый',
      time: '02:25',
      programm: 'Наедине со всеми',
    }], 
  }, {
    title: 'Эфир',
    href: '#',
    content: [{
      channel: 'Успех',
      programm: 'Управление как искусство',
    }, {
      channel: 'earthTV',
      programm: 'Ночь. Мир в это время',
    }, {
      channel: 'Совершенно секретно',
      programm: 'Андрей Возн...',
    }],
  }
  
  ];
  
  export {
    list,
    news,
    financialNews,
    categories,
    articles,
  }
  