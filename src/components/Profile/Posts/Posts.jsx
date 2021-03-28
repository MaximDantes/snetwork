import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
    let posts = props.posts.map(item => (
        <Post
            avatar={item.avatar}
            text={item.text}
        />
    ));
    posts.reverse();

    return (
        <div>
            <NewPost
                writeNewPost={props.writeNewPost}
                addPost={props.addPost}
            />
            {posts}
        </div>
    );
}

export default Posts;
