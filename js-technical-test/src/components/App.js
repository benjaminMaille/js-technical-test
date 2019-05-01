import React from 'react';
import './App.css';

import SearchForm from './SearchForm';
import CommentList from './CommentList';
import UserList from './UserList';

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

    onSearch(query) {
        load(query,
            response => {
                this.setState({title: response.title});
            }
        );
        load(query + '/comments',
            response => {
                this.setState({
                    comments: response,
                    users : response
                        .map((value) => {
                            value.user.selected = true;
                            return value.user;
                        })
                        .reduce((result, item) => {
                            return !result.find(i => i.id == item.id) ? [...result,item] : result;
                        },[])
                });
            }
        );
    }

    onUserVisibilityChange(userId) {
        this.setState({
            users: this.state.users.map(user => {
                if (user.id == userId) {
                    user.selected = !user.selected;
                }
                return user;
            })
        });
    }

    render() {

        // Filtering comments by user visibility
        const comments = this.state.comments.filter(comment => {
            return !!this.state.users.find(user => {
                return user.id == comment.user.id && user.selected;
            });
        });

        return (
            <div>
                <header>
                    <SearchForm onSubmit={query => this.onSearch(query)} />
                    <h1>{this.state.title}</h1>
                </header>
                <main>
                    <aside>
                        <UserList
                            users={this.state.users}
                            onUserVisibilityChange={id => this.onUserVisibilityChange(id)} />
                    </aside>
                    <section>
                        <CommentList comments={comments}/>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;