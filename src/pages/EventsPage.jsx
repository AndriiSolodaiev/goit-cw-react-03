import { fetchEvents } from 'services/eventsApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(err => alert(err.message));
  }, []);

  return (
    <>
      {events.length !== 0 && (
        <ul>
          {events.map(({ name, id }) => (
            <li key={id}>
              <Link>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default EventPage;
