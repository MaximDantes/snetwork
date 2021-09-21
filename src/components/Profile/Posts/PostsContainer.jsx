import {connect} from "react-redux";
import Posts from "./Posts";
import {addPost} from '../../../store/profile/profile-actions'

const mapStateToProps = (state) => ({
    posts: state.profile.postsData
});

export default connect(mapStateToProps, {addPost})(Posts);