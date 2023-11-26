type Route = {
  name: string;
  route: string;
  icon: React.ReactNode;
};

type Workout = {
  workout_id: number;
  workout_name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  Exercises: Exercise[];
};

type User = {
  user_id: number;
  username: string;
  email: string;
  hash: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
};

type Exercise = {
  exercise_id: number;
  exercise_name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  workout_id: number;
  ExerciseDays: ExerciseDay[];
};

type ExerciseDay = {
  exercise_day_id: number;
  exercise_id: number;
  Sets: ExerciseSet[];
  createdAt: Date;
  updated_at: Date;
  date: string;
};

type ExerciseSet = {
  set_id: number;
  exercise_day_id: number;
  reps: number;
  weight: Decimal;
  createdAt: Date;
  updated_at: Date;
};
