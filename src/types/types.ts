export type TProfileInfo = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    fullName?: string
    aboutMe?: string
    contacts: {
        github?: string
        vk?: string
        facebook?: string
        instagram?: string
        twitter?: string
        website?: string
        youtube?: string
        mainLink?: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export type TProfileInfoWithoutPhotos = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    fullName?: string
    aboutMe?: string
    contacts: {
        github?: string
        vk?: string
        facebook?: string
        instagram?: string
        twitter?: string
        website?: string
        youtube?: string
        mainLink?: string
    }
}

export type TUser = {
    id: number,
    name: string,
    status: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    followed: boolean
}

export type TMessage = {
    message: string
    photo: string | null
    userId: number
    userName: string
}