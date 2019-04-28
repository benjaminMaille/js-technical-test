import React from 'react';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { query: 'https://api.github.com/repos/octocat/Hello-World/issues/comments' };
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <form onSubmit={e => this.onFormSubmit(e)}>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={e => this.setState({ query: e.target.value })}
                    placeholder="Enter issue URL to show it's comments" />
            </form>
        );
    }
}

export default SearchForm;