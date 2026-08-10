import mongoose from 'mongoose';
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    members: { type: Number, required: true, min: 0 },
    createdAt: { type: Date, default: () => new Date() },
}, { timestamps: true });
const TeamModel = mongoose.models.Team || mongoose.model('Team', teamSchema);
export { TeamModel };
