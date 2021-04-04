import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    const addPost = (formData) => {
        props.addPost(formData.postText);
    }

    let posts = props.posts.map(item => (
        <Post
            avatar={item.avatar}
            text={item.text}
        />
    ));
    posts.reverse();

    return (
        <div>
            <NewPost onSubmit={addPost}/>
            {posts}
        </div>
    );
}

export default Posts;
