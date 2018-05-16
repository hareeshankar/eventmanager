import React from 'react';
import Header from './Header';
import EventList from './EventList';

class App extends React.Component {
  state = {
    pageHeader: 'Events',
    events: this.props.initialEvents
  };
  componentDidMount() {

  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
