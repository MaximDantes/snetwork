import React from 'react';
import { addPostActionCreator, writeNewPostActionCreator } from '../../../redux/profileReducer';
import NewPost from './NewPost';

const NewPostContainer = (props) => {

    const addPost = () => {
        if (props.state.newPostText) {
            props.dispatch(addPostActionCreator());
        }
    };

    const writeNewPost = (e) => {
        props.dispatch(writeNewPostActionCreator(e.target.value));
    }

    return (
        <NewPost newPostText={props.state.newPostText} addPost={addPost} writeNewPost={writeNewPost} />
    );
}

export default NewPostContainer;
