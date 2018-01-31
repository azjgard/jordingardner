import React, { Component } from "react";
import "./MobileNavigation.css";

import { Link } from "react-router-dom";
import Draggable from "react-draggable";

import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";

const NavigateTo = props => (
  <BottomNavigationItem
    icon={props.icon}
    label={props.label}
    onClick={props.onClick}
    containerElement={<Link to={props.to} />}
  />
);

class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.yBounds = {
      top: 0,
      bottom: 56
    };
    this.state = {
      drawerOpen: false,
      position: undefined
    };
  }

  resetPosition() {
    this.setState({ position: undefined });
  }

  toggleDrawer(drawerOpen, y, x = 0) {
    this.setState({ drawerOpen });
    this.moveDrawer(y, x);
  }

  moveDrawer(y, x = 0) {
    this.setState({ position: { x, y } }, this.resetPosition);
  }

  handleStop(e) {
    const transformProperty =
      String(e.target.parentNode.parentNode.style.transform) ||
      String(e.target.parentNode.style.transform);

    const yPosition = parseInt(
      transformProperty
        .split(", ")[1]
        .replace(")", "")
        .replace("px", "")
    );

    const differential = 10;

    const drawerOpen = this.state.drawerOpen;
    const farFromTop = yPosition > this.yBounds.top + differential;
    const farFromBottom = yPosition < this.yBounds.bottom - differential;

    if (!drawerOpen && farFromBottom) {
      this.toggleDrawer(true, this.yBounds.top);
    } else if (drawerOpen && farFromTop) {
      this.toggleDrawer(false, this.yBounds.bottom);
    }
  }

  render() {
    const draggableProps = {
      axis: "y",
      handle: ".pullable",
      defaultPosition: {
        x: 0,
        y: this.yBounds.bottom
      },
      bounds: {
        top: this.yBounds.top,
        bottom: this.yBounds.bottom,
        left: 0,
        right: 0
      },
      position: this.state.position,
      onStop: e => this.handleStop(e)
    };

    return (
      <div
        className={`NavContainer`}
        style={{
          display: this.props.isMobile ? "block" : "none"
        }}
      >
        <Draggable {...draggableProps}>
          <div>
            <div className="pullable">
              <i
                className={`fas fa-caret-up ${
                  this.state.drawerOpen ? "open" : "closed"
                }`}
              />
            </div>
            <BottomNavigation className="MobileNavigation" selectedIndex={0}>
              {this.props.children}
            </BottomNavigation>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default MobileNavigation;
