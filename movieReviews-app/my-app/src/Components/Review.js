//This file will make it possible for a user to add a review to a movie

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';

//Here is the Review class

export default class Review extends React.Component {
    render() {
        return (
            <div className='card w-80'>
                <div className='card- header'>
                    Review
                </div>
                <div className='card-body'>
                   This is a movie review.
                </div>
            </div>
        );
    }
}