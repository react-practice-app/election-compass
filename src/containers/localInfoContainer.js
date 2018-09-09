import React, { Component } from 'react';

import LocalInfo from '../components/LocalInfo';

// import 'whatwg-fetch';

import 'axios';
import Axios from 'axios';

class LocalInfoContainer extends Component {

    constructor(){
        super();
        this.state = {
            googleInfo: {},
            repInfo: []
        }
    }
    
    componentDidMount(){
        Axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=17660%2076th%20ct%20.%20Hialeah%20FL&key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y')
            .then((response) => {
                // console.log(response);
                // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.name);
                this.setState({
                    googleInfo: response.data,
                    repInfo: [response.data.officials, response.data.offices]
                });
                // console.log('~~~~~~~~~~~~~~~~~~~~~',this.state.repInfo);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        // let cardsMapped = this.state.officials.map((rep,i) => {
        //     return (
        //       <LocalInfo
        //         key={rep}
        //         office={this.state.googleInfo.offices[i].name}
        //         official={this.state.googleInfo.officials[i].name}
        //         // party={this.state.googleInfo.officials.party}
        //         // image={this.state.googleInfo.officials.}
        //       />
        //     );
        // });
          console.log('=================================================================',this.state.repInfo);
        return (
            <div className="container">
                <div className="row">
                    <ul>
                        <h1>PLACEHOLDER</h1>
                        {/* {cardsMapped} */}
                    </ul>
                </div>
            </div>
        );
    }   
}

export default LocalInfoContainer;