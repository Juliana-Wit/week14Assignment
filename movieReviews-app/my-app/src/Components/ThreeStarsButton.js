//This button is how the user will rate a movie three stars in their review

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';

//This is the basic construction of the ThreeStarsButton class

export default class ThreeStarsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <button 
            className='btn btn-success'
            onClick={() => this.setState(state => ({count: state.count +1}))}>
                Three Stars {this.state.count}
            </button> 
        );
    }
}