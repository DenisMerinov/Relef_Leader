import { rtkApi } from 'shared/api/rtkApi'
import { UserInfoResponse } from '../model/types/user'

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserInfo: build.query<UserInfoResponse, void>({
            query: () => ({
                url: '/user/my_info',
            }),
        }),
    }),
})

export const useGetUserInfo = userApi.useLazyGetUserInfoQuery
