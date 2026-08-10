import express from 'express';
const usersRouter = express.Router();
const teamsRouter = express.Router();
const activitiesRouter = express.Router();
const leaderboardRouter = express.Router();
const workoutsRouter = express.Router();
const users = [
    { id: 'u1', name: 'Alex Trent', team: 'Alpha' },
    { id: 'u2', name: 'Mia Chen', team: 'Bravo' },
];
const teams = [
    { id: 't1', name: 'Alpha', members: 12 },
    { id: 't2', name: 'Bravo', members: 10 },
];
const activities = [
    { id: 'a1', userId: 'u1', type: 'run', durationMinutes: 34 },
    { id: 'a2', userId: 'u2', type: 'cycling', durationMinutes: 49 },
];
const workouts = [
    { id: 'w1', name: 'Quick HIIT', difficulty: 'medium' },
    { id: 'w2', name: 'Endurance Ride', difficulty: 'hard' },
];
const leaderboard = [
    { rank: 1, team: 'Alpha', score: 9820 },
    { rank: 2, team: 'Bravo', score: 8875 },
];
usersRouter.get('/', (_req, res) => {
    res.json({ users });
});
usersRouter.get('/:id', (req, res) => {
    const user = users.find((item) => item.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user });
});
teamsRouter.get('/', (_req, res) => {
    res.json({ teams });
});
teamsRouter.get('/:id', (req, res) => {
    const team = teams.find((item) => item.id === req.params.id);
    if (!team) {
        return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ team });
});
activitiesRouter.get('/', (_req, res) => {
    res.json({ activities });
});
activitiesRouter.post('/', (req, res) => {
    const activity = {
        id: `a${activities.length + 1}`,
        ...req.body,
    };
    activities.push(activity);
    res.status(201).json({ activity });
});
leaderboardRouter.get('/', (_req, res) => {
    res.json({ leaderboard });
});
workoutsRouter.get('/', (_req, res) => {
    res.json({ workouts });
});
workoutsRouter.get('/:id', (req, res) => {
    const workout = workouts.find((item) => item.id === req.params.id);
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({ workout });
});
const apiRouter = express.Router();
apiRouter.use('/users', usersRouter);
apiRouter.use('/teams', teamsRouter);
apiRouter.use('/activities', activitiesRouter);
apiRouter.use('/leaderboard', leaderboardRouter);
apiRouter.use('/workouts', workoutsRouter);
apiRouter.get('/', (_req, res) => {
    res.json({
        message: 'Octofit Tracker API',
        routes: [
            '/api/users/',
            '/api/teams/',
            '/api/activities/',
            '/api/leaderboard/',
            '/api/workouts/',
        ],
    });
});
export default apiRouter;
