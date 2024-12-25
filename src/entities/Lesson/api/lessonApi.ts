import { rtkApi } from 'shared/api/rtkApi'
import { LessonResponse } from '../model/types/lesson'

const lessonApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getLessonList: build.query<LessonResponse, void>({
            query: () => ({
                url: '/lesson',
            }),
        }),
    }),
})

export const useGetLessonList = lessonApi.useGetLessonListQuery
