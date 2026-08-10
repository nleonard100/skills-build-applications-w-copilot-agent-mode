import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, default: null },
    caloriesBurned: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
    notes: { type: String, default: '' },
  },
  { timestamps: true }
);

const ActivityModel = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export { ActivityModel };
