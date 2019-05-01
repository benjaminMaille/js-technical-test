import React from 'react';

class UserList extends React.Component {

    render() {
        const users = this.props.users.map(({id, login, avatar_url, selected, word_count}) => {
            return (
                <li key={id} className="User">
                    <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => this.props.onUserVisibilityChange(id)} />
                    <img src={avatar_url} />
                    {login} ({word_count})
                </li>
            );
        });

        return <ul className="UserList">{users}</ul>
    }
}

export default UserList;