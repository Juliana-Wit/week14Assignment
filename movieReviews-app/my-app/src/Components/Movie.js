//This file contains all of the movies to be reviewed

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

//This is where I put together the Movie class. Each movie will display to the UI
//with the movie title, genre, MPA rating, and release date on the header of a card.
//In the card body, there will be a quick synopsis of the movie with the Review List
//underneath. The footer will have the Review Form so that users can add their own reviews. 

export default class Movie extends React.Component {
    
    render() {
    
        return (
            <div className='card w-80'>
                <div className='card-header'>
                    Movie Title, Genre, MPA Rating, Release Date
                </div>
                <div className='card-body'>
                    <p>Synopsis of Movie</p>
                    <ReviewList/>
                </div>
                <div className='card-footer'>
                    <ReviewForm />
                </div>
            </div>
        );
    }
}
