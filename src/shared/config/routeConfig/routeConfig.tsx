import { FaqPage } from 'pages/FaqPage'
import { LibraryPage } from 'pages/LibraryPage'
import { RatingPage } from 'pages/RatingPage'
import { ActivityListPage } from 'pages/ActivityListPage'
import type { RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
    ACTIVITY_LIST = 'activity_list',
    RATING = 'rating',
    LIBRARY = 'library',
    FAQ = 'faq',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ACTIVITY_LIST]: '/',
    [AppRoutes.RATING]: '/rating',
    [AppRoutes.LIBRARY]: '/library',
    [AppRoutes.FAQ]: '/faq',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ACTIVITY_LIST]: {
        path: RoutePath[AppRoutes.ACTIVITY_LIST],
        element: <ActivityListPage />,
    },
    [AppRoutes.RATING]: {
        path: RoutePath[AppRoutes.RATING],
        element: <RatingPage />,
    },
    [AppRoutes.LIBRARY]: {
        path: RoutePath[AppRoutes.LIBRARY],
        element: <LibraryPage />,
    },
    [AppRoutes.FAQ]: {
        path: RoutePath[AppRoutes.FAQ],
        element: <FaqPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
