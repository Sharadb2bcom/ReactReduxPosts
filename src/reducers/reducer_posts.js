import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/index';

export default function(state={}, action) {
	switch(action.type){
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POST: 
			//const post =action.payload.data;
			//const newState = { ...state };
			//newState[post.id]=post;
			//return newState;

			return {...state, [action.payload.data.id] : action.payload.data };
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data,"id"); 
			//here we are getting a array and converting to an object
			// and making "Id" as a key for all the objects in the array
		default:                                      
		return state;
	}
}