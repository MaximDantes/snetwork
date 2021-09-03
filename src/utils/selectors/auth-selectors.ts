import {TState} from '../../redux/store'

export const getAuthId = (state: TState) => state.auth.id
export const getIsAuth = (state: TState) => state.auth.isAuth