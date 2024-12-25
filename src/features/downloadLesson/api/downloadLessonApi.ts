import { rtkApi } from 'shared/api/rtkApi'

const downloadLessonApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        downloadLesson: build.query<any, any>({
            query: () => ({
                url: '/activity/calendar',
            }),
        }),
    }),
})

export const useDownloadLesson = downloadLessonApi.useDownloadLessonQuery
