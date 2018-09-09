import React, { Component } from 'react';

class LocalInfo extends Component {
    render() {
        // console.log('**********',this.props.officials);
        // console.log('**********',this.props.offices);
        return (
        <div className="card" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
                {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap"></img> */}
                <h5 className="card-title">{this.props.official}</h5>
                <h6 className="card-title">{this.props.office}</h6>
                {/* <p className="card-text">Date: {this.props.info.electionDay}</p> */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        );
    }
}
 
export default LocalInfo;