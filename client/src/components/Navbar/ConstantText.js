import {PATHS} from "../../constants";

export const NavLinks = [
    {
      text: 'Новости',
      to: '/news',
      dropList:[]
    },
    {
        text: 'Архипастырь',
        to: '/',
        dropList: [
            {
                text: 'Биография',
                to: '/'
            },
            {
                text: 'Проповеди',
                to: '/'
            }
        ]
    },
    {
        text: 'Собор',
        to: '/',
        dropList: [
            {
                text: 'Духовенство',
                to: PATHS.CHURCH_PRIESTS
            },
            {
                text: 'Расписание служб',
                to: '/'
            },
            {
                text: 'Психологический кабинет',
                to: '/'
            }
        ]
    },
    {
        text: `Воскресная школа 'Андреевцы'`,
        to: '/',
        dropList: []
    },
    {
        text: 'Галерея',
        to: PATHS.GALLERY,
        dropList: []
    }
];