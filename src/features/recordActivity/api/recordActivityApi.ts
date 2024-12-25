import { rtkApi } from 'shared/api/rtkApi'
import { RecordActivityRequest } from '../model/types/recorActivity'

const recordActivityApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        recordActivity: build.mutation<any, RecordActivityRequest>({
            query: (body) => ({
                url: '/user/entry_to_activities',
                method: 'POST',
                body,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Activity', id: arg.uid }],
        }),
    }),
})

export const useRecordActivity = recordActivityApi.useRecordActivityMutation
