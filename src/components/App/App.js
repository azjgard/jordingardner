import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";

import { slugify } from "../../util";
import { portfolioItems } from "../../data";

import FontIcon from "material-ui/FontIcon";
import { BottomNavigationItem } from "material-ui/BottomNavigation";

import Portfolio from "../../pages/Portfolio";
import PortfolioDetails from "../../pages/PortfolioDetails";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";

const Home = props => (
  <div>
    <h1>Home</h1>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItems,
      meta: {
        isMobile: true,
        drawerOpen: false
      }
    };
  }

  itemFromSlug(slug) {
    for (let i in this.state.portfolioItems) {
      const matchFound =
        this.state.portfolioItems.slug === slug ||
        slugify(this.state.portfolioItems[i].name) === slug;

      if (matchFound) {
        return this.state.portfolioItems[i];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          path="/portfolio"
          render={props => <Portfolio items={portfolioItems} {...props} />}
        />
        <Route
          path="/portfolio/:slug"
          render={props => {
            return (
              <PortfolioDetails
                rootURL="/portfolio"
                data={this.itemFromSlug(props.match.params.slug)}
                {...props}
              />
            );
          }}
        />

        <MobileNavigation {...this.state.meta}>
          <BottomNavigationItem
            containerElement={<Link to={"/"} />}
            icon={<FontIcon className="far fa-user" />}
            label="Home"
          />
          <BottomNavigationItem
            containerElement={<Link to={"/portfolio"} />}
            icon={<FontIcon className="far fa-folder" />}
            label="Portfolio"
          />
        </MobileNavigation>

        {this.props.children}
      </div>
    );
  }
}

export default App;
