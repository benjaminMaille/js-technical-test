import React from 'react';

import SearchForm from './SearchForm';
import CommentList from './CommentList';

function load(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(JSON.parse(xhr.response));
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {comments: []};
    }

    onSearch(query) {
        load(
            query,
            response => {
                console.log(response);
                this.setState({comments: response});
            }
        );
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={query => this.onSearch(query)} />
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}

export default App;