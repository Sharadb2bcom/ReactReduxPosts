import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import promise from 'redux-promise';

import rootReducer from './reducers/index';
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import ShowPost from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
  		<Router>
  			<div>
	  			<Route exact path="/" component={PostIndex} />
	  			<Route path="/posts/new" component={PostsNew} />
	  			<Route path="/posts/:id" component={ShowPost} />
	  		</div>
  		</Router>
  </Provider>
  , document.querySelector('.container'));
