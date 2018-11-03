import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import rootReducer from './reducers/index';
import PostIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
  	<div>
  		<BrowserRouter>
  			<Route path="/" component={PostIndex} />
  		</BrowserRouter>
  	</div>
  </Provider>
  , document.querySelector('.container'));
