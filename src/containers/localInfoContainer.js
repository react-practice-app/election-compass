import React, { Component } from "react";

import LocalInfo from "../components/LocalInfo";

// import 'whatwg-fetch';

import "axios";
import Axios from "axios";

class LocalInfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      googleInfo: {},
      officials: [],
      offices: [],
      props: [],
      officialsWithTitles: []
    };
  }

  componentDidMount() {
    Axios.get(
      "https://www.googleapis.com/civicinfo/v2/representatives?address=17660%2076th%20ct%20.%20Hialeah%20FL&key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y"
    )
      .then(response => {
        // console.log(response);
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.name);
        this.setState({
          googleInfo: response.data,
          officials: response.data.officials,
          offices: response.data.offices
        });
        // this.mappingInfo();
        // console.log('~~~~~~~~~~~~~~~~~~~~~',this.state.repInfo);
        this.mappingInfo();
      })
      .catch(err => {
        console.log(err);
      });
  }
  mappingInfo() {
    if (
      this.state.officials.length &&
      this.state.offices.length &&
      this.state.officialsWithTitles.length != this.state.officials.length
    ) {
      let officialsWithTitlesCopy = [];
      for (let i = 0; i < this.state.officials.length; i++) {
        officialsWithTitlesCopy[i] = this.state.officials[i];
        for (let n = 0; n < this.state.offices.length; n++) {
          for (
            let j = 0;
            j < this.state.offices[n].officialIndices.length;
            j++
          ) {
            if (this.state.offices[n].officialIndices[j] === i) {
              officialsWithTitlesCopy[i].title = this.state.offices[n].name;
            }
          }
        }
      }
      this.setState({
        officialsWithTitles: officialsWithTitlesCopy
      });
    } else {
      console.log(`CAN'T RUN MAPPINGINFO()`);
      console.log("--------------this.state.officials: ", this.state.officials);
      console.log("--------------this.state.officials: ", this.state.offices);
    }
  }
  render() {
    let cards = this.state.officialsWithTitles.map((official, i) => {
      return (
        <LocalInfo key={i} office={official.title} official={official.name} />
      );
    });
    return (
      <div className="container">
        <div className="row">
          <ul>
            {/* <h1>PLACEHOLDER</h1> */}
            {cards}
          </ul>
        </div>
      </div>
    );
  }
}

export default LocalInfoContainer;
