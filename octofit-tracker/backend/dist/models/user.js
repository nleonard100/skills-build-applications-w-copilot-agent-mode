import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    role: { type: String, default: 'member' },
    joinedAt: { type: Date, default: () => new Date() },
}, { timestamps: true });
const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export { UserModel };
