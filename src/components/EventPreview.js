import React, { Component } from 'react';

class EventPreview extends Component {
  handleClick = () => {
    console.log(this.props.name);
  };
  render() {
    return (
      <div className="link EventPreview" onClick={this.handleClick}>
        <div className="event-name">
          {this.props.name}
        </div>
        <div className="event-description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

EventPreview.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
};

export default EventPreview;
