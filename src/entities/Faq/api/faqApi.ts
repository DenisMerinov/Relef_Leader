import { rtkApi } from 'shared/api/rtkApi'
import { FAQResponse } from '../model/types/faq'

const faqApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFaqList: build.query<FAQResponse, void>({
            query: () => ({
                url: '/faq/list',
            }),
        }),
    }),
})

export const useGetFaqList = faqApi.useGetFaqListQuery
