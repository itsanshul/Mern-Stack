import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ post: { loading, post }, getPost, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <Link to='/posts' className='btn'>
        Back to Profiles
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map((comment, index) => (
          <CommentItem key={index} postId={post._id} comment={comment} />
        ))}
      </div>
    </>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
