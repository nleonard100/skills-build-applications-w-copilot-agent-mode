import { useEffect, useState } from 'react';
import { fetchResource } from '../api.js';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResource('leaderboard')
      .then(setLeaderboard)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {loading && <p>Loading leaderboard...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((row) => (
                <tr key={row.rank ?? row.team}>
                  <td>{row.rank}</td>
                  <td>{row.team}</td>
                  <td>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {leaderboard.length === 0 && <p>No leaderboard entries found.</p>}
        </div>
      )}
    </section>
  );
}

export default Leaderboard;
