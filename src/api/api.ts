import axios from 'axios'
import {TProfileInfo} from '../types/types'

//TODO remove duplication
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
type TAuth = {
    resultCode: ResultCodes.Success | ResultCodes.Error
    messages: string[],
    data: {
        id: number,
        email: string,
        login: string
    }
}
type TLogin = {
    resultCode: ResultCodes.Success | ResultCodes.Error
    messages: string[],
    data: {
        userId: number
    }
}
type TPut = {
    resultCode: ResultCodes.Success | ResultCodes.Error
    messages: string[]
    data: Object
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a1d94230-84f9-401a-8547-9f4808e1cd45'
    }
})

export const usersApi = {
    getUsers: (pageSize = 10, currentPage = 1) => {
        return axiosInstance.get<TUsers>(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },

    findUsers: (pageSize = 10, findText = '') => {
        return axiosInstance.get<TUsers>(`users?count=${pageSize}&page=1&term=${findText}`)
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

export const authApi = {
    setUser: () => {
        return axiosInstance.get<TAuth>(`auth/me`)
            .then(response => response.data)
    },

    login: (email: string, password: string, rememberMe: boolean) => {
        return axiosInstance.post<TLogin>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout: () => {
        return axiosInstance.delete<TPut>(`auth/login`)
            .then(response => response.data)
    },
}

export const profileApi = {
    getProfile: (id: number) => {
        return axiosInstance.get<TProfileInfo>(`profile/${id}`)
            .then(response => response.data)
    },

    getStatus: (id: number) => {
        return axiosInstance.get<string>(`profile/status/${id}`)
            .then(response => response.data)
    },

    updateStatus: (status: string) => {
        return axiosInstance.put<TPut>(`profile/status`, {status})
            .then(response => response.data)
    },
}