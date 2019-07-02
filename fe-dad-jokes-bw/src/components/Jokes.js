import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Joke from './Joke'

class Jokes extends Component {
    render() { 
        return ( 
            <div className='Jokes'>
                <h1> Dad Jokes </h1>
                <ul>

                    {this.props.jokes.map (joke => {
                        return (
                            <Joke
                            author={joke.author}
                            joke={joke.joke} 
                            like={joke.like}
                            key={joke.user_id}
                            />
                        );
                    })}

                </ul>
                <div className='addJoke'>

                    <Link to='dad-jokes-form'>Add a Dad Joke</Link>

                </div>
            </div>
         );
    }
}


Joke.defaultProps = {
    jokes: [],
};
 
export default Jokes;