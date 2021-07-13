import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a1d94230-84f9-401a-8547-9f4808e1cd45'
    }
})

export const usersApi = {
    getUsers: (pageSize = 10, currentPage = 1) => {
        return axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },

    findUsers: (pageSize = 10, findText = '') => {
        return axiosInstance.get(`users?count=${pageSize}&page=1&term=${findText}`)
            .then(response => response.data);
    },

    toggleFollowing: (id, follow) => {
        if (follow){
            return axiosInstance.post(`follow/${id}`)
                .then(response => response.data);

        } else {
            return axiosInstance.delete(`follow/${id}`)
                .then(response => response.data);
        }
    },
}

export const authApi = {
    setUser: () => {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data);
    },

    login: (email, password, rememberMe) => {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout: () => {
        return axiosInstance.delete(`auth/login`)
            .then(response =>  response.data)
    },
}

export const profileApi = {
    getProfile: (id) => {
        return axiosInstance.get(`profile/${id}`)
            .then(response => response.data);
    },

    getStatus: (id) => {
        return axiosInstance.get(`profile/status/${id}`)
            .then(response => response.data);
    },

    updateStatus: (status) => {
        return axiosInstance.put(`profile/status`, {status})
            .then(response => response.data);
    },
}