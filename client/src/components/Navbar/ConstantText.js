import {PATHS} from "../../constants";

export const NavLinks = [
    {
      text: 'Новости',
      to: '/',
      dropList:[]
    },
    {
        text: 'Архипастырь',
        to: '/home/bishop',
        dropList: [
            {
                text: 'Биография',
                to: '/home/bishop'
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
            }
        ]
    },
    {
        text: 'Галерея',
        to: PATHS.GALLERY,
        dropList: []
    }
];
