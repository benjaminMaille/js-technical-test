import React from 'react';

import CommentList from './CommentList';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CommentList />
        );
    }
}

export default App;