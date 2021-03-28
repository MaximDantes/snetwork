import React from 'react';
import newPostClasses from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <div className={newPostClasses.newPost}>
            <textarea
                value={props.newPostText}
                placeholder='Write your post here...'
                onChange={(e) => props.writeNewPost(e.target.value)}
            />

            <div className={newPostClasses.buttonWrapper}>
                <button onClick={props.addPost}>Create Post</button>
            </div>
        </div>
    );
}

export default NewPost;
