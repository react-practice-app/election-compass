import React, { Component } from 'react';

import LocalInfo from '../components/LocalInfo';

import 'whatwg-fetch';

class LocalInfoContainer extends Component {

    constructor(){
        super();
        this.state = {
            googleInfo: {}
        }
    }
    
    componentDidMount(){
        window.fetch('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y&address=17660%2076th%20ct%20.%20Hialeah%20FL&electionId=6000')
            .then((response) => {
                console.log(response.body);
            })
            .then((theResponse) =>{
                theResponse = theResponse.JSON();
                console.log('~~~~~~~~~~~~~~~~~~~~~~',theResponse);
                this.setState({
                    googleInfo: theResponse
                });
                console.log(this.googleInfo);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <LocalInfo />
        );
    }   
}

export default LocalInfoContainer;