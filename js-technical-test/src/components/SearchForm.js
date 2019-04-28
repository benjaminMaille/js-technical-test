import React from 'react';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { query: '' };
    }

    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.query);
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