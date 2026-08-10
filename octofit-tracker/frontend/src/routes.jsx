import { Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<div>Welcome to Octofit Tracker. Choose a section above.</div>} />
        <Route path="users" element={<Users />} />
        <Route path="activities" element={<Activities />} />
        <Route path="teams" element={<Teams />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="workouts" element={<Workouts />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
