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

        this.state = {
            title: '',
            comments: [],
            users: []
        };
    }

    // componentDidUpdate() {
    //     if (this.state.comments.length && !this.state.users.length) {
    //         console.log(this.state.comments);

    //         let users = this.state.comments
    //             .filter((elem, pos, arr) => {
    //                 console.log(elem);
    //                 console.log(pos);
    //                 console.log(arr);
    //             });

    //         console.log('USER',users);

    //         // for (let comment of this.state.comments) {
    //         //     load(comment.user.url,
    //         //         response => {
    //         //             this.setState({users: this.state.users.concat(response)});
    //         //         }
    //         //     );
    //         // }
    //     }
    // }

    onSearch(query) {
        load(query,
            response => {
                console.log(response);
                this.setState({title: response.title});
            }
        );
        load(query + '/comments',
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
                <h1>{this.state.title}</h1>
                <CommentList comments={this.state.comments} users={this.state.users}/>
            </div>
        );
    }
}

export default App;