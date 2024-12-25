import { rtkApi } from 'shared/api/rtkApi'
import { RatingListResponse } from '../model/types/rating'

const ratingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRatingList: build.query<RatingListResponse, void>({
            query: () => ({
                url: '/user_by_score',
            }),
        }),
    }),
})

export const useGetRatingList = ratingApi.useGetRatingListQuery
