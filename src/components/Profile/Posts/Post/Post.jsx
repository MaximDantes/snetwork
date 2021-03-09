import postClasses from './Post.module.css';

const Post = (props) => {
    return (
        <div className={postClasses.post}>
            <img src={props.avatar}></img>
            <p>{props.text}</p>
        </div>
    );
};

export default Post;