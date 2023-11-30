//This file contains what will be displayed to the user on the web page.

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';
import MovieList from './MoviesList';

//This is where I will create the Container element in React

export default class Container extends React.Component {
    render() {
        return React.createElement('div',
        {class: 'container'},
        React.createElement(MovieList, {},null),
        );
    }
}