import {axiosInstance} from './api'
import {TFilter} from '../store/usersReducer'

type TUser = {
    id: number
    name: string
    status: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}
type TUsers = {
    items: TUser[]
    totalCount: number
    error: null | string
}
type TFollow = {
    resultCode: number
    messages: string[],
    data: object
}
export const usersApi = {
    getUsers: (pageSize = 10, currentPage = 1, filter: TFilter) => {
        const term = filter.term ? `&term=${filter.term}` : ''
        const friend = filter.friend === null ? '' : filter.friend ? `&friend=true` : `&friend=false`

        const url = `users?count=${pageSize}&page=${currentPage}${term}${friend}`

        return axiosInstance.get<TUsers>(url)
            .then(response => response.data)
    },

    toggleFollowing: (id: number, follow: boolean) => {
        if (follow) {
            return axiosInstance.post<TFollow>(`follow/${id}`)
                .then(response => response.data)

        } else {
            return axiosInstance.delete<TFollow>(`follow/${id}`)
                .then(response => response.data)
        }
    },
}