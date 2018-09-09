import React, { Component } from "react";

class LocalInfo extends Component {
  render() {
    // console.log('**********',this.props.officials);
    // console.log('**********',this.props.offices);
    return (
      <div className="card m-1 mb-5" style={{ width: 18 + "rem" }}>
        <div className="card-header text-center">
          <h4 className="card-title font-weight-bold">{this.props.official}</h4>
        </div>
        <div className="card-body">
          <img
            className="card-img-top img-fluid rounded"
            src={
              this.props.image
                ? this.props.image
                : "https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?w=300&ssl=1"
            }
            alt="Official Officeholder Portrait"
            // style={{ maxHeight: 300 + "px", width: "auto" }}
          />
          <h4 className="card-title">{this.props.office}</h4>
          <h5 className="float-left">
            Party Affiliation:
            <br />
            {this.props.party}
          </h5>
          {/* <p className="card-text">Date: {this.props.info.electionDay}</p> */}
        </div>
        <div className="card-footer text-center">
          <a
            href={this.props.url}
            target="_blank"
            className="btn btn-primary"
            style={{ marginBottom: 0 + "px" }}
          >
            More Info
          </a>
        </div>
      </div>
    );
  }
}

export default LocalInfo;
