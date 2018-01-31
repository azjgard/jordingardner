import React, { Component } from "react";
import "./PortfolioDetails.css";

import { Link } from "react-router-dom";

class PortfolioDetails extends Component {
  render() {
    return (
      <div className="PortfolioDetails">
        <Link to={this.props.rootURL}>
          <i className="close-button fas fa-times" />
        </Link>
        <h1>{this.props.data.name}</h1>
        <h2>{this.props.data.date}</h2>
        <img src={`/${this.props.data.image}`} alt={this.props.data.name} />
        <h3 style={{ color: this.props.data.baseColor }}>
          {this.props.data.baseColor}
        </h3>
      </div>
    );
  }
}

export default PortfolioDetails;
