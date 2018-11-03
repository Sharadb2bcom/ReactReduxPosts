import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetails from '../containers/book_details';

export default class App extends Component {
  render() {
    return (
      <div>
      	<BookList />
      	<BookDetails />
      </div>
    );
  }
}
