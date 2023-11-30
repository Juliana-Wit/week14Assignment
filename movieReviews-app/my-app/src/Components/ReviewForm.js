//This file will display a form at the bottom of each movie that contains both the reviews and ratings for the movie

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';
import OneStarsButton from './OneStarsButton';
import TwoStarsButton from './TwoStarsButton';
import ThreeStarsButton from './ThreeStarsButton';
import FourStarsButton from './FourStarsButton';
import FiveStarsButton from './FiveStarsButton';

//This is the construction of the review form that users can use to add 
//their own review to the web page and the movie of their choice.
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = 
        this.handleChange.bind(this);
        this.handleSubmit =
        this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className='card w-80'>
                <div className='card- header'onSubmit={this.handleSubmit}>
                    Review
                </div>
                <div className='card-body'>
                    <input type='text' value={this.state.value} 
                    onChange={this.handleChange}/>
                    
                    <OneStarsButton />
                    <TwoStarsButton />
                    <ThreeStarsButton />
                    <FourStarsButton />
                    <FiveStarsButton />
                </div>
                <div className='card-footer'>
                    <input type='submit' value='Submit' />
                </div>
            </div>
        );
    }
}