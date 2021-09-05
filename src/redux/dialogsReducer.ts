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
        { id: 1, name: 'Saber', avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album' },
        { id: 2, name: 'Reechka', avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album' },
        { id: 3, name: 'Gats', avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album' },
        { id: 4, name: 'Archer', avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album' },
        { id: 5, name: 'Kaworu', avatar: 'https://sun9-46.userapi.com/impf/_43O2WhGHD4dliGJDBcN1Dux9S_WdBsNCeXEGQ/ZOFx1FsBQV0.jpg?size=500x500&quality=96&sign=408e9ffa797e0b951fd90645bc0f8950&type=album' }
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