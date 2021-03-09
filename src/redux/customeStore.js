import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

const store = {
    _state: {
        profile: {
            postsData: [
                {
                    id: 1,
                    avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album',
                    text: 'I know that my redemeer lives and that in the end he will stand up on the Earth'
                },
                {
                    id: 2,
                    avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album',
                    text: 'And after my skeen has been destroyed, yet in my flash I will see God.'
                },
                {
                    id: 3,
                    avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album',
                    text: 'I myself will see him with my own eyes I and now another How my heart yearns within me Amen If you say how we will hound him scince the root of the troubles lives in him you should fear the sword yourself For wrath will bring punishment by the sword And them you will know that there is judment'
                }
            ],
            profileInfoData: {
                id: 1,
                firstName: 'Archer',
                surname: 'Archer',
                status: 'dead inside',
                dateOfBirth: '30.03.1986',
                religion: 'ornitarionism',
                avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album',
                topImg: 'http://i.imgur.com/wYuJwNi.jpg'
            },
            newPostText: '',
        },
        dialogs: {
            sendersData: [
                { id: 1, firstName: 'Saber', avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album' },
                { id: 2, firstName: 'Reechka', avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album' },
                { id: 3, firstName: 'Gats', avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album' },
                { id: 4, firstName: 'Archer', avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album' },
                { id: 5, firstName: 'Kaworu', avatar: 'https://sun9-46.userapi.com/impf/_43O2WhGHD4dliGJDBcN1Dux9S_WdBsNCeXEGQ/ZOFx1FsBQV0.jpg?size=500x500&quality=96&sign=408e9ffa797e0b951fd90645bc0f8950&type=album' }
            ],
            messagesData: [
                { id: 1, sender: 0, receiver: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
                { id: 2, sender: 1, receiver: 0, text: 'I am the bone of my sword' },
                { id: 3, sender: 0, receiver: 1, text: 'Steel is my body and fire is my blood' },
                { id: 4, sender: 0, receiver: 1, text: 'I have created over a thouthands blades' },
                { id: 5, sender: 1, receiver: 0, text: 'Unknow to death' },
                { id: 6, sender: 1, receiver: 0, text: 'Not know to life' },
                { id: 1, sender: 0, receiver: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
                { id: 2, sender: 1, receiver: 0, text: 'I am the bone of my sword' },
                { id: 3, sender: 0, receiver: 1, text: 'Steel is my body and fire is my blood' },
                { id: 4, sender: 0, receiver: 1, text: 'I have created over a thouthands blades' },
                { id: 5, sender: 1, receiver: 0, text: 'Unknow to death' },
                { id: 6, sender: 1, receiver: 0, text: 'Not know to life' },
                { id: 1, sender: 0, receiver: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
                { id: 2, sender: 1, receiver: 0, text: 'I am the bone of my sword' },
                { id: 3, sender: 0, receiver: 1, text: 'Steel is my body and fire is my blood' },
                { id: 4, sender: 0, receiver: 1, text: 'I have created over a thouthands blades' },
                { id: 5, sender: 1, receiver: 0, text: 'Unknow to death' },
                { id: 6, sender: 1, receiver: 0, text: 'Not know to life' },
                { id: 1, sender: 0, receiver: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
                { id: 2, sender: 1, receiver: 0, text: 'I am the bone of my sword' },
                { id: 3, sender: 0, receiver: 1, text: 'Steel is my body and fire is my blood' },
                { id: 4, sender: 0, receiver: 1, text: 'I have created over a thouthands blades' },
                { id: 5, sender: 1, receiver: 0, text: 'Unknow to death' },
                { id: 6, sender: 1, receiver: 0, text: 'Not know to life' },
                { id: 1, sender: 0, receiver: 1, text: 'Вы вновь со мной, туманные виденья, мне в юности мелькнувшие давно. Вас ль удержу во власти вдохновенья, былым ли снам явиться вновь дано. Из сумрака, из тьмы полузабвенной восстали вы. О, будь что суждено' },
                { id: 2, sender: 1, receiver: 0, text: 'I am the bone of my sword' },
                { id: 3, sender: 0, receiver: 1, text: 'Steel is my body and fire is my blood' },
                { id: 4, sender: 0, receiver: 1, text: 'I have created over a thouthands blades' },
                { id: 5, sender: 1, receiver: 0, text: 'Unknow to death' },
                { id: 6, sender: 1, receiver: 0, text: 'Not know to life' },
            ],
            newMessageText: '',
        },
        firends: {
            friendsData: [
                { id: 1, firstName: 'Saber', surname: 'Pendragon', avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album' },
                { id: 2, firstName: 'Reechka', surname: 'Ayanami', avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album' },
                { id: 3, firstName: 'Gats', surname: 'Gats', avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album' },
                { id: 4, firstName: 'Archer', surname: 'Emiya', avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album' },
                { id: 5, firstName: 'Kaworu', surname: 'Nagisa', avatar: 'https://sun9-46.userapi.com/impf/_43O2WhGHD4dliGJDBcN1Dux9S_WdBsNCeXEGQ/ZOFx1FsBQV0.jpg?size=500x500&quality=96&sign=408e9ffa797e0b951fd90645bc0f8950&type=album' }
            ],
        },
    },

    _callSubscriber() {
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        this._callSubscriber(this);
    },

    set state(value) {
        this.state = value;
    },
    get state() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
