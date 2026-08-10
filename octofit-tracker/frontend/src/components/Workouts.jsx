import { useEffect, useState } from 'react';
import { fetchResource } from '../api.js';

// Expected endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResource('workouts')
      .then(setWorkouts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {loading && <p>Loading workouts...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout.id || workout.name}>
                  <td>{workout.id}</td>
                  <td>{workout.name}</td>
                  <td>{workout.difficulty ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {workouts.length === 0 && <p>No workouts available.</p>}
        </div>
      )}
    </section>
  );
}

export default Workouts;
