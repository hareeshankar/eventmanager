import React from 'react';
import EventPreview from './EventPreview';

const EventList = ({ events }) => (
  <div className="EventList">
   {Object.keys(events).map(eventId =>
     <EventPreview
       key={eventId}
       {...events[eventId]} />
   )}
  </div>
);

EventList.propTypes = {
  events: React.PropTypes.object
};

export default EventList;
