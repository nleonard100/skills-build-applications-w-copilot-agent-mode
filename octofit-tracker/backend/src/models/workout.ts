import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['easy', 'medium', 'hard'] },
    durationMinutes: { type: Number, required: true, min: 5 },
    focus: { type: String, required: true },
    equipment: { type: String, required: true },
    description: { type: String, default: '' },
  },
  { timestamps: true }
);

const WorkoutModel = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
export { WorkoutModel };
