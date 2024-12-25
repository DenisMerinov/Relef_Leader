import { rtkApi } from 'shared/api/rtkApi'
import { ActivityResponse } from '../model/types/activity'

const activityApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getActivityList: build.query<ActivityResponse, void>({
            query: () => ({
                url: '/activity/calendar',
            }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.result.map(({ uid }) => ({ type: 'Activity' as const, id: uid })), 'Activity']
                    : ['Activity'],
        }),
    }),
})

export const useGetActivityList = activityApi.useGetActivityListQuery
