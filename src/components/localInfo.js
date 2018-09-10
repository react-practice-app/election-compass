import React, { Component } from "react";

class LocalInfo extends Component {
  badgeColor() {
    let badge = "badge ";
    if (this.props.party === "Republican") {
      badge += "badge-danger";
    } else if (this.props.party === "Democratic") {
      badge += "badge-primary";
    }
    return badge;
  }
  render() {
    // console.log('**********',this.props.officials);
    // console.log('**********',this.props.offices);
    return (
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="card mb-5" style={{ height: 75 + "vh" }}>
          <div className="card-header text-center">
            <h4 className="card-title font-weight-bold">
              {this.props.official}
            </h4>
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
            <h5 className="card-title">{this.props.office}</h5>
            <h5 className="float-left">
              Party Affiliation:
              <br />
              <span className={this.badgeColor()}>{this.props.party}</span>
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
      </div>
    );
  }
}

export default LocalInfo;
