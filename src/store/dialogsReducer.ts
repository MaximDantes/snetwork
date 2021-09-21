import defaultAvatar from '../assets/images/defaultAvatar.jpg'

export type TUser = {
    id: number,
    name: string,
    avatar: string
}
type TMessage = {
    id: number,
    senderId: number,
    receiverId: number,
    text: string
}
type TInitialState = {
    sendersData: TUser[],
    messagesData: TMessage[]
}

type TActions = ReturnType<typeof sendMessage>

const initialState: TInitialState = {
    sendersData: [
        { id: 1, name: 'User1', avatar: defaultAvatar},
        { id: 2, name: 'User2', avatar: defaultAvatar},
        { id: 3, name: 'User3', avatar: defaultAvatar},
        { id: 4, name: 'User4', avatar: defaultAvatar},
        { id: 5, name: 'User5', avatar: defaultAvatar},
    ],
    messagesData: [
        { id: 1, senderId: 0, receiverId: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
        { id: 2, senderId: 1, receiverId: 0, text: 'I am the bone of my sword' },
        { id: 3, senderId: 0, receiverId: 1, text: 'Steel is my body and fire is my blood' },
        { id: 4, senderId: 0, receiverId: 1, text: 'I have created over a thouthands blades' },
        { id: 5, senderId: 1, receiverId: 0, text: 'Unknow to death' },
        { id: 6, senderId: 1, receiverId: 0, text: 'Not know to life' },
        { id: 1, senderId: 0, receiverId: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
        { id: 2, senderId: 1, receiverId: 0, text: 'I am the bone of my sword' },
        { id: 3, senderId: 0, receiverId: 1, text: 'Steel is my body and fire is my blood' },
        { id: 4, senderId: 0, receiverId: 1, text: 'I have created over a thouthands blades' },
        { id: 5, senderId: 1, receiverId: 0, text: 'Unknow to death' },
        { id: 6, senderId: 1, receiverId: 0, text: 'Not know to life' },
        { id: 1, senderId: 0, receiverId: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
        { id: 2, senderId: 1, receiverId: 0, text: 'I am the bone of my sword' },
        { id: 3, senderId: 0, receiverId: 1, text: 'Steel is my body and fire is my blood' },
        { id: 4, senderId: 0, receiverId: 1, text: 'I have created over a thouthands blades' },
        { id: 5, senderId: 1, receiverId: 0, text: 'Unknow to death' },
        { id: 6, senderId: 1, receiverId: 0, text: 'Not know to life' },
        { id: 1, senderId: 0, receiverId: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
        { id: 2, senderId: 1, receiverId: 0, text: 'I am the bone of my sword' },
        { id: 3, senderId: 0, receiverId: 1, text: 'Steel is my body and fire is my blood' },
        { id: 4, senderId: 0, receiverId: 1, text: 'I have created over a thouthands blades' },
        { id: 5, senderId: 1, receiverId: 0, text: 'Unknow to death' },
        { id: 6, senderId: 1, receiverId: 0, text: 'Not know to life' },
        { id: 1, senderId: 0, receiverId: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
        { id: 2, senderId: 1, receiverId: 0, text: 'I am the bone of my sword' },
        { id: 3, senderId: 0, receiverId: 1, text: 'Steel is my body and fire is my blood' },
        { id: 4, senderId: 0, receiverId: 1, text: 'I have created over a thouthands blades' },
        { id: 5, senderId: 1, receiverId: 0, text: 'Unknow to death' },
        { id: 6, senderId: 1, receiverId: 0, text: 'Not know to life' },
    ],
};

export const dialogsReducer = (state: TInitialState = initialState, action: TActions): TInitialState => {

    switch (action.type) {
        case 'dialogs/SEND_MESSAGE':
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: 2,
                    senderId: 1,
                    receiverId: 0,
                    text: action.message
                }],
            };

        default:
            return state;
    }
};

export const sendMessage = (message: string) => ({
    type: 'dialogs/SEND_MESSAGE',
    message
} as const)