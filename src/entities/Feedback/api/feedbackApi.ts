import { rtkApi } from 'shared/api/rtkApi'
import { FeedbackResponse } from '../model/types/feedback'

const feedbackApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFeedbackLinks: build.query<FeedbackResponse, void>({
            query: () => ({
                url: '/options',
            }),
        }),
    }),
})

export const useGetFeedbackLinks = feedbackApi.useGetFeedbackLinksQuery
