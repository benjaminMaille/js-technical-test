import React from 'react';

import SearchForm from './SearchForm';
import CommentList from './CommentList';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchForm />
                <CommentList />
            </div>
        );
    }
}

export default App;