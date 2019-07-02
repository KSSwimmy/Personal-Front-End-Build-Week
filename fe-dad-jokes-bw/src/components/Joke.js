import React from 'react'

const Joke = props => {
    return (
        <div className='Joke'>
            <h3> {props.author} </h3>
            <p> {props.joke} </p>
            <p> {props.likes} </p>

        </div>
    );
};

Joke.defaultProps = {
    author: '',
    joke: '',
    likes: 0
};

export default Joke;