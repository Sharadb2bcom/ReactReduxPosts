import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
	componentDidMount() {
		const {id}= this.props.match.params;
		this.props.fetchPost(id);
	}

	onDeleteHandle() {
		const {id} = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}
	render() {
		const { post } = this.props;
		if(!post){
			return <div>Loading...</div>
		}
		return(
				<div>
					<Link to="/">Back To Posts</Link>
					<button
						className="btn btn-danger pull-xs-right"
						onClick={this.onDeleteHandle.bind(this)}
					>
					Delete Post</button>
					<h4>{post.title}</h4>
					<h5>Categories: {post.categories}</h5>
					<h6>{post.content}</h6>
				</div>
			);
	}
} 
//ownProps is same as this.props
function mapStateToProps({posts},ownProps) {
	return { post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);