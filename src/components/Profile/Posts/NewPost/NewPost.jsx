import React from 'react';
import s from './NewPost.module.css';
import Button from '../../../common/Button/Button'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {FormControls} from "../../../common/FormControls/FormControls";

const maxLength10 = maxLength(10)

let NewPost = (props) => {
    return (
        <form className={s.newPost} onSubmit={props.handleSubmit}>
            <Field
                component={FormControls}
                name='postText'
                placeholder='Write your post here...'
                validate={[required, maxLength10]}
            />

            <div className={s.buttonWrapper}>
                <Button text='Create Post'/>
            </div>
        </form>
    )
}

NewPost = reduxForm({
    form: 'newPost'
})(NewPost)

export default NewPost
