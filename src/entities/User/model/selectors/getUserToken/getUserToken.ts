import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme'

export const getUserToken = (state: StateScheme) => {
    return state.user.token
}
