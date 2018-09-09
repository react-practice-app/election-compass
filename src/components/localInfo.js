import React, { Component } from 'react';

class LocalInfo extends Component {
    state = {}
    render() { 
        return ( <h1>
            {this.props.name}
        </h1> );
    }
}
 
export default LocalInfo;