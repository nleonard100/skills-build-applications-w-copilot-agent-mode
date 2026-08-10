import { useEffect, useState } from 'react';
import { fetchResource } from '../api.js';

// Expected endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResource('activities')
      .then(setActivities)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {loading && <p>Loading activities...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id || `${activity.userId}-${activity.type}`}>
                  <td>{activity.id}</td>
                  <td>{activity.userId}</td>
                  <td>{activity.type}</td>
                  <td>{activity.durationMinutes ?? activity.duration ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {activities.length === 0 && <p>No activities found.</p>}
        </div>
      )}
    </section>
  );
}

export default Activities;
