import React from 'react';

const Question = (props) => {
    return (
        <div className="Question">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <p>{props.language}</p>
        </div>
    );
}

export default Question;