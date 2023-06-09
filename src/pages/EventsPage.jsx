import { fetchEvents } from 'services/eventsApi';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
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
              <Link to={id} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default EventPage;
