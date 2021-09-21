import {profileReducer} from './profile/profile-reducer'
import {addPost, deletePost} from './profile/profile-actions'

const state = {
    postsData: [
        {
            id: 1,
            avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album',
            text: 'I know that my redemeer lives and that in the end he will stand up on the Earth'
        },
        {
            id: 2,
            avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album',
            text: 'And after my skean has been destroyed, yet in my flash I will see God.'
        },
        {
            id: 3,
            avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album',
            text: 'I myself will see him with my own eyes I and now another How my heart yearns within me Amen If you say how we will hound him scince the root of the troubles lives in him you should fear the sword yourself For wrath will bring punishment by the sword And them you will know that there is judment'
        }
    ],
    profileInfoData: null,
    status: null,
    isFetching: true,
}

test('new post should be added', () => {
    const action = addPost('test post text')

    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[3].text).toBe('test post text')
})

test('post should be removed when id is correct', () => {
    const action = deletePost(1)

    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2)
})

test('post shouldn`t be removed when id is incorrect', () => {
    const action = deletePost(88)

    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(3)
})

