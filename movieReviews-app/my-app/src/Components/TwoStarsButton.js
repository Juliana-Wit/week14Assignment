//This button is how the user will rate a movie two stars in their review

//Bellow are the imports that will help create the component and aud in its functionality

import React from 'react';

//This is the basic construction of the TwoStarsButton class

export default class TwoStarsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <button className='btn btn-warning' 
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Two Stars {this.state.count}
            </button>
        );
    }
}
