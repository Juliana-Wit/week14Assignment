//This file will display previous user reviews

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';
import Review from './Review';

//This is the construction of the ReviewList class

export default class ReviewList extends React.Component {
    render() {
        return React.createElement('div',
        {class: 'container'},
        React.createElement(Review, {}, null),
        React.createElement(Review, {}, null),
        React.createElement(Review, {}, null),
        );
    }
}