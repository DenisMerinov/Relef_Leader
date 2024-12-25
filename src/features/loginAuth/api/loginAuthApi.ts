import { rtkApi } from 'shared/api/rtkApi'
import { EnterAuthType } from '../model/types/loginAuth'

const loginAuthApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        auth: build.mutation<any, EnterAuthType>({
            query: (body) => ({
                url: '/auth',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const useAuth = loginAuthApi.useAuthMutation
