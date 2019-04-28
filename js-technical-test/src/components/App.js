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

    componentDidMount() {
        load(
            'https://api.github.com/repos/octocat/Hello-World/issues/comments',
            response => {
                console.log(response);
                this.setState({comments: response});
            }
        );
    }

    onSearch(query) {
        console.log('App log',query);
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={this.onSearch} />
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}

export default App;