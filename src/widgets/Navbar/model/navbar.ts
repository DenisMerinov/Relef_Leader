import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface navbarItem {
    path: string
    text: string
}

export const navbarItemsList: navbarItem[] = [
    {
        path: RoutePath.activity_list,
        text: 'Программа',
    },
    {
        path: RoutePath.rating,
        text: 'Рейтинг',
    },
    {
        path: RoutePath.library,
        text: 'Библиотека',
    },
    {
        path: RoutePath.faq,
        text: 'FAQ',
    },
]
