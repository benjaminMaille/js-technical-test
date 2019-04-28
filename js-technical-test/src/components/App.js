import React from 'react';

import SearchForm from './SearchForm';
import CommentList from './CommentList';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    onSearch(query) {
        console.log('App log',query);
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={this.onSearch} />
                <CommentList />
            </div>
        );
    }
}

export default App;