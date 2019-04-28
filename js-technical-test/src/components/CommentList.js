import React from 'react';

const CommentList = props => {
    const comments = props.comments.map(comment => {
        return <div key={comment.id}>{comment.body}</div>
    });

    return <div>{comments}</div>
}

export default CommentList;