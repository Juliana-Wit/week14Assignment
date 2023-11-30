//This file is what will display all of the movies, along with the movie reviews and ratings, to the user on the web page.

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';
import Movie from './Movie';
//import Review from './Review';
//import ReviewForm from './ReviewForm';

//This is the construction of the MovieList class

export default class MovieList extends React.Component{
    render() {
       
        return React.createElement('div',
        {class: 'container'},
        React.createElement(Movie, {}, null),
        React.createElement(Movie, {}, null),
        React.createElement(Movie, {}, null),
        );
    }
}
