import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme'

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    tagTypes: ['Activity'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://demo3.disweb.ru/api/v1',
        prepareHeaders: (headers, { getState }) => {
            const state: StateScheme = getState() as StateScheme
            const token = state.user.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (build) => ({}),
})
