import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarComponent.css';

const localizer = momentLocalizer(moment);

const getEventDate = (date) => {
  const [year, month, day] = date.split('-');
  return new Date(year, month - 1, day);
};

const CalendarComponent = ({ events }) => {
  const navigate = useNavigate();

  const eventList = events.map((event, index) => ({
    id: index,
    title: event.title,
    start: getEventDate(event.date),
    end: getEventDate(event.date),
    allDay: true,
  }));

  const handleSelectEvent = (event) => {
    navigate(`/diaries/${event.id}`);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month']}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default CalendarComponent;
