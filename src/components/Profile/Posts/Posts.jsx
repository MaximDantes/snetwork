import Post from './Post/Post';
import postsClasses from './Posts.module.css';

const Posts = (props) => {
    let postsItems = props.state.map(item => (<Post avatar={item.avatar} text={item.text} />));
    postsItems.reverse();

    return (
        <div>
            { postsItems}
        </div>
    );
}

export default Posts;
