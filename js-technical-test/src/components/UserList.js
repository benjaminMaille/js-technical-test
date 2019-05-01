import React from 'react';

class UserList extends React.Component {

    render() {
        const users = this.props.users.map(({id, login, avatar_url}) => {
            return (
                <li key={id} className="User">
                    <img src={avatar_url}/>
                    {login}
                </li>
            );
        });

        return <ul className="UserList">{users}</ul>
    }
}

export default UserList;