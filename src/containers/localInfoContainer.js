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
        Axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=17660%2076th%20ct%20.%20Hialeah%20FL&key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y')
            .then((response) => {
                // console.log(response);
                // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.name);
                this.setState({
                    googleInfo: response.data
                });
                // console.log('~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.name);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        let cardsMapped = this.state.googleInfo.map((rep) => {
            return (
              <LocalInfo
                // key={rep}
                // office={this.state.googleInfo.offices.name}
                name={this.state.googleInfo.officials.name}
                // party={this.state.googleInfo.officials.party}
                // image={this.state.googleInfo.officials.}
              />
            );
          });
          console.log('=================================================================',this.state.googleInfo);
        return (
            <div className="container">
                <div className="row">
                    <ul>
                        {cardsMapped}
                    </ul>
                </div>
            </div>
        );
    }   
}

export default LocalInfoContainer;