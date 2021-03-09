const actionTypes = {

};

const initialState = {
    friendsData: [
        { id: 1, firstName: 'Saber', surname: 'Pendragon', avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album' },
        { id: 2, firstName: 'Reechka', surname: 'Ayanami', avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album' },
        { id: 3, firstName: 'Gats', surname: 'Gats', avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album' },
        { id: 4, firstName: 'Archer', surname: 'Emiya', avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album' },
        { id: 5, firstName: 'Kaworu', surname: 'Nagisa', avatar: 'https://sun9-46.userapi.com/impf/_43O2WhGHD4dliGJDBcN1Dux9S_WdBsNCeXEGQ/ZOFx1FsBQV0.jpg?size=500x500&quality=96&sign=408e9ffa797e0b951fd90645bc0f8950&type=album' }
    ],
};

export const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};