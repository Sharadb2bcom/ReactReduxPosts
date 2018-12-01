import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
		renderField(field) {
		const { meta:{ touched, error } } = field;
		const className=`form-group ${touched && error ? 'has-danger':''}`

		return(
				<div className={className}>
					<label>{field.label}</label>
					<input
						className="form-control"
						type="text"
						{...field.input}
					/>
					<div className="text-help">
						{touched ? error : ''}
					</div>
				</div>
			);
	}
	onSubmit(values) {
		this.props.createPost(values, () => {
			this.props.history.push('/')
		});
	}
	render() {
		const { handleSubmit } =this.props;
		return(
				<form className="form-new" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field
						label="Post Content"
						name="content"
						component={this.renderField}
					/>
					<button type="submit" className="btn btn-primary">Save</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</form>
			);
	}
}
function validate(values) {
	const errors={};
	//validate the inputs
	if(!values.title){
		errors.title = "Enter the Title!"
	}
	if(!values.categories) {
		errors.categories= "Enter the Categories";
	}
	if(!values.content) {
		errors.content = "Enter the Content";
	}
	//if errors object have no values then form is ready to sunmit
	//if errors object have a properties then form is valid.
	return errors;
}
export default reduxForm({
validate,
form: "PostsNewForm"
}) (
connect(null, {createPost})(PostsNew)
);
