import React, { Component } from "react";
import "./Portfolio.css";

import SimpleSlider from "../components/Slider/Slider";
import PortfolioItem from "../components/PortfolioItem/PortfolioItem";

import { slugify } from "../util";

class Portfolio extends Component {
  renderPortfolioItems(portfolioItems, url) {
    return portfolioItems.map(item => (
      <PortfolioItem
        name={item.name}
        date={item.date}
        image={item.image}
        baseColor={item.baseColor}
        key={`${item.name}-${item.date}`}
        url={`${url}/${item.slug || slugify(item.name)}`}
      />
    ));
  }

  render() {
    return (
      <div className="Portfolio">
        <div className="header">
          <h1>Portfolio</h1>
        </div>
        <div className="content">
          <SimpleSlider
            slides={this.renderPortfolioItems(
              this.props.items,
              this.props.match.url
            )}
          />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default Portfolio;
