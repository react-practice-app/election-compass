import React, { Component } from "react";

import LocalInfo from "../components/LocalInfo";

import "axios";
import Axios from "axios";

import "dotenv";
const googleKey = process.env.REACT_APP_GOOGLE;

class LocalInfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      googleInfo: {},
      officials: [],
      offices: [],
      props: []
    };
  }
  componentDidMount() {
    this.fetchGoogleInfo();
    //     this.mappingInfo();
  }

  fetchGoogleInfo() {
    Axios.get(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=17660%2076th%20ct%20.%20Hialeah%20FL&key=${googleKey}`
    )
      .then(response => {
        this.setState({
          googleInfo: response.data,
          officials: response.data.officials,
          offices: response.data.offices
        });
        this.mappingInfo();
      })
      .catch(err => {
        console.log(err);
      });
  }
  mappingInfo() {
    if (this.state.officials.length && this.state.offices.length) {
      let officialsCopy = this.state.officials;
      let titles = {};
      for (let i = 0; i < this.state.offices.length; i++) {
        for (let j = 0; j < this.state.offices[i].officialIndices.length; j++) {
          titles[this.state.offices[i].officialIndices[j]] = this.state.offices[
            i
          ].name;
        }
      }
      for (let i = 0; i < this.state.officials.length; i++) {
        officialsCopy[i].title = titles[i];
      }
      this.setState({
        officials: officialsCopy
      });
    } else {
      console.log(`CAN'T RUN MAPPINGINFO()`);
      console.log(this.state.officials.length, this.state.offices.length);
    }
  }
  render() {
    let cards = this.state.officials.map((official, i) => {
      return (
        <LocalInfo
          key={i}
          office={official.title}
          official={official.name}
          image={official.photoUrl}
          party={official.party}
          url={official.urls}
        />
      );
    });
    return (
      <div className="container">
        <div className="row d-flex mt-5 border border-primary rounded">
          {cards}
        </div>
      </div>
    );
  }
}

export default LocalInfoContainer;
