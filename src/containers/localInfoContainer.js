import React, { Component } from 'react';

import LocalInfo from '../components/LocalInfo';

// import 'whatwg-fetch';

import 'axios';
import Axios from 'axios';

class LocalInfoContainer extends Component {

    constructor(){
        super();
        this.state = {
            googleInfo: {}
        }
    }
    
    componentDidMount(){
        Axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y&address=17660%2076th%20ct%20.%20Hialeah%20FL&electionId=6000')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    googleInfo: response.data.election
                });
                console.log('~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.name);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <LocalInfo name={this.state.googleInfo.name} />
        );
    }   
}

export default LocalInfoContainer;