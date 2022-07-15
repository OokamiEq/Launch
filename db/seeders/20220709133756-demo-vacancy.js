module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vacancies', [{
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300 000 за строчку кода',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Стажер в ООО Ромашка',
      level: 'intern',
      salary: ' До 15 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'New york',
      user_id: '2',
    }, {
      title: 'Джуниор backend в медицинскую компанию',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Fullstack разработчик на полный день',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'DevOps разработчик',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'GameDev master',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Data Science engineer',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'HR Manager GachiScript',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'HTML-верстка',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Разработчик событий',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Стажер в Яндекс',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'Яндекс',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Backend Разработчик',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Бигдата стажер в компанию',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Frontend разработчик в автосервис',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Backend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Стажер в ООО Сказка',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Стажер Frontend Developer',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Джун Бэк Developer',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Джуниор Frontend Developer',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'intern',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }, {
      title: 'Стажер в ООО Самсон Frontend Developer',
      level: 'middle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание и знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'JS, React, Redux, Node, Express, MongoDB',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '2',
    }, {
      title: 'Junior Frontend Developer',
      level: 'junior',
      salary: '80 000 ₽ ',
      company: 'РАДУГАФАРМ',
      schedule: 'Полный рабочий день',
      url: 'https://trudvsem.ru/company/1093340006099',
      contact_name: 'ВВП',
      contact_phone: '888',
      contact_social: 'https://trudvsem.ru/vacancy/card/1093340006099/21e4a885-d1fc-11ec-838c-d768660431c4',
      experience: '1лет',
      about_company: 'писать программу для нано чипов',
      about_project: 'писать программы для пво',
      duties: ' Frontend Developer on js',
      requirements: 'что-то тут должно быть',
      technology: 'Javascript',
      conditions: 'Здравоохранение и социальное обеспечение',
      city: 'Saint Petersburg',
      user_id: '2',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};