import { useEffect, useState } from 'react';
import { fetchResource } from '../api.js';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResource('teams')
      .then(setTeams)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {loading && <p>Loading teams...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id || team.name}>
                  <td>{team.id}</td>
                  <td>{team.name}</td>
                  <td>{team.members ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {teams.length === 0 && <p>No teams available.</p>}
        </div>
      )}
    </section>
  );
}

export default Teams;
