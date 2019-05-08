import React, { Component } from "react";

class Content extends Component {
  state = {};
  render() {
    const { details } = this.props;
    return (
      <div className="tracking-item">
        <div className="tracking-icon status-intransit">
          <img src={details.image} width="40px" />
        </div>
        <div className="tracking-date">
          {details.date}
          <span>{details.time}</span>
        </div>
        <div className="tracking-content">
          {details.name}
          <span>{details.description}</span>
        </div>
      </div>
    );
  }
}

export default Content;
