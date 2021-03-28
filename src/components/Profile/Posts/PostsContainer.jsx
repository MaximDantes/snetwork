import { connect } from "react-redux";
import { addPost, writeNewPost } from "../../../redux/profileReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => ({
    posts: state.profile.postsData
});

export default connect(mapStateToProps, {
    writeNewPost, addPost
})(Posts);