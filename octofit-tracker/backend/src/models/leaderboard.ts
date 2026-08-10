import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
  {
    rank: { type: Number, required: true, min: 1 },
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    teamName: { type: String, required: true },
    score: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const LeaderboardModel = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
export { LeaderboardModel };
