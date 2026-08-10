import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const apiHost = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api`
    : 'http://localhost:8000/api';

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>Octofit Tracker</h1>
          <p className="subtitle">React 19 + Vite presentation tier</p>
        </div>
        <div className="api-notice">
          <p>
            API host: <strong>{apiHost}</strong>
          </p>
          <p>
            <small>
              Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> for
              Codespaces-aware API routing.
            </small>
          </p>
        </div>
      </header>

      <nav className="nav-bar">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
      </nav>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Use <code>.env.local</code> to define <code>VITE_CODESPACE_NAME</code>.</p>
      </footer>
    </div>
  );
}

export default App;
