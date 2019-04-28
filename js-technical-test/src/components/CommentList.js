import React from 'react';

class CommentList extends React.Component {

    render() {
        const comments = this.props.comments.map(comment => {

            return (
                <div key={comment.id}>
                    <img src={comment.user.avatar_url} className={comment.author_association == 'MEMBER' ? 'author' : null}/>
                    {comment.body}
                </div>
            );
        });

        return <div>{comments}</div>
    }
}

export default CommentList;