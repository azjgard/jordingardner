import React, { Component } from "react";
import "./PortfolioItem.css";
import { Card, CardMedia, CardTitle } from "material-ui/Card";

import { Link } from "react-router-dom";

import Color from "color";

class PortfolioItem extends Component {
  render() {
    return (
      <Link to={this.props.url}>
        <Card className="Card">
          <CardMedia
            className="CardMedia"
            overlay={
              <CardTitle
                className="CardTitle"
                title={this.props.name}
                titleStyle={{
                  color: this.props.baseColor
                }}
                subtitle={this.props.date}
                subtitleStyle={{
                  color: this.props.baseColor
                }}
              />
            }
            overlayContainerStyle={{
              backgroundColor: Color(this.props.baseColor)
                .alpha(0.2)
                .string()
            }}
            overlayContentStyle={{
              backgroundColor: "rgba(255,255,255,1)"
            }}
            overlayStyle={{
              backgroundColor: Color(this.props.baseColor)
                .alpha(0.2)
                .string()
            }}
            mediaStyle={{
              backgroundColor: Color(this.props.baseColor)
                .alpha(0.5)
                .string()
            }}
          >
            <img src={this.props.image} alt="" />
          </CardMedia>
        </Card>
      </Link>
    );
  }
}

export default PortfolioItem;
