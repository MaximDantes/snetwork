import axios from 'axios'
import {TProfileInfo, TProfileInfoWithoutPhotos} from '../types/types'

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
    resultCode: ResultCodes.CaptchaRequired | ResultCodes.Success | ResultCodes.Error
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
type TSetAvatar = {
    resultCode: number
    messages: string[]
    data: {
        photos: {
            small: string
            large: string
        }
    }
}
type TCaptchaUrl = {
    url: string
}

export enum ResultCodes {
    Success = 0,
    Error = 1,
    CaptchaRequired = 10
}

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        //'API-KEY': 'a1d94230-84f9-401a-8547-9f4808e1cd45'
        'API-KEY': 'b08179f3-1361-49b0-ae81-3d52c5a0de9d'
    }
})

export const authApi = {
    setUser: () => {
        return axiosInstance.get<TAuth>(`auth/me`)
            .then(response => response.data)
    },

    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => {
        debugger
        return axiosInstance.post<TLogin>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    logout: () => {
        return axiosInstance.delete<TPut>(`auth/login`)
            .then(response => response.data)
    },
}

export const profileApi = {
    getProfile(id: number) {
        return axiosInstance.get<TProfileInfo>(`profile/${id}`)
            .then(response => response.data)
    },

    getStatus(id: number) {
        return axiosInstance.get<string>(`profile/status/${id}`)
            .then(response => response.data)
    },

    updateStatus(status: string) {
        return axiosInstance.put<TPut>(`profile/status`, {status})
            .then(response => response.data)
    },

    setAvatar(file: File) {
        let formData = new FormData()
        formData.append('image', file)

        return axiosInstance.put<TSetAvatar>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    setAdditionalProfileInfo(profileInfo: TProfileInfoWithoutPhotos) {
        return axiosInstance.put<TPut>('profile', profileInfo)
            .then(response => response.data)
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return axiosInstance.get<TCaptchaUrl>('security/get-captcha-url')
            .then(response => response.data)
    }
}