//This button is how the user will rate a movie four stars in their review

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';

//This is the basic construction of the FourStarsButton class

export default class FourStarsButton extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                count: 0
            };
    }
    render () {
        return (
            <button className= 'btn btn-info' 
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
            Four Stars {this.state.count}
            </button>
        );
    }
}
