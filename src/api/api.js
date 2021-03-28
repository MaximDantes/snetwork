import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a1d94230-84f9-401a-8547-9f4808e1cd45'
    }
});

export const usersApi = {

    getUsers: (pageSize = 10, currentPage = 1) => {
        return axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },

    findUsers: (pageSize = 10, findText = '') => {
        return axiosInstance.get(`users?count=${pageSize}&page=1&term=${findText}`)
            .then(response => response.data);
    },

    unfollow: (id) => {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => response.data);
    },

    follow: (id) => {
        return axiosInstance.post(`follow/${id}`)
            .then(response => response.data);
    },
}

export const authApi = {

    setUser: () => {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data);
    }
}

