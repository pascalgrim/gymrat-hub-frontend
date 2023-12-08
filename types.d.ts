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
  exercises: ExerciseInWorkout[];
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
  ExerciseDays: ExerciseDay[];
  workouts: Workout[];
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
  weight: number;
  createdAt: Date;
  updated_at: Date;
};

type ExerciseInWorkout = {
  exercise_id: number;
  workout_id: number;
  exercise: Exercise;
};

type MuscleGroup =
  | "Brust"
  | "Ruecken"
  | "Beine"
  | "Schultern"
  | "Bizeps"
  | "Trizeps"
  | "Po"
  | "Bauchn";
