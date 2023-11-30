//This button is how the user will rate a movie five stars in their review

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';

//This is the basic construction of the FiveStarsButton class

export default class FiveStarsButton extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                count: 0
            };
    }
    render(){
        return (
            <button className= 'btn btn-primary' 
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
            Five Stars {this.state.count}
            </button>
        );
    }
}
