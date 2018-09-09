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
            officials: [],
            offices: [],
            props: []
        }
    }
    
    componentDidMount(){
        Axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=17660%2076th%20ct%20.%20Hialeah%20FL&key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y')
            .then((response) => {
                // console.log(response);
                // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.name);
                this.setState({
                    googleInfo:     response.data,
                    officials:      response.data.officials,
                    offices:        response.data.offices
                });
                // this.mappingInfo();
                // console.log('~~~~~~~~~~~~~~~~~~~~~',this.state.repInfo);
                this.mappingInfo();
            })
            .catch(err => {
                console.log(err);
            })
    }
    mappingInfo() {
        if (this.state.officials.length && this.state.offices.length) {
            let propsCopy = [];
            for(let i = 0; i < this.state.officials.length; i++){
                if(this.state.officials[i] && this.state.offices[i]){
                    propsCopy[i] = this.state.officials[i];
                    propsCopy[i].title = this.state.offices[i].name;
                } else {
                    // console.log('NO MATCH FOR OFFICE',this.state.offices[i],this.state.officials[i]);
                    continue;
                }
            }
            this.setState({
                props: propsCopy
            });
                return (<LocalInfo office={this.state.offices.name} official={this.state.officials.name} />);
        } else {
            console.log(`CAN'T RUN MAPPINGINFO()`);
            console.log('--------------this.state.officials: ',this.state.officials);
            console.log('--------------this.state.officials: ',this.state.offices);
        }
    }
    render() {
        console.log(this.state.googleInfo);
        return (
            <div className="container">
                <div className="row">
                    <ul>
                        <h1>PLACEHOLDER</h1>
                        {/* {this.state.cardsMapped} */}
                    </ul>
                </div>
            </div>
        );
    }   


}

export default LocalInfoContainer;