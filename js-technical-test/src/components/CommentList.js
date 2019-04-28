import React from 'react';

class CommentList extends React.Component {

    render() {
        const comments = this.props.comments.map(comment => {

            return (
                <div key={comment.id} className="Comment">
                    <img src={comment.user.avatar_url} className={`Avatar${comment.author_association == 'MEMBER' ? ' Avatar--author' : ''}`}/>
                    {comment.body}
                </div>
            );
        });

        return <div className="CommentList">{comments}</div>
    }
}

export default CommentList;