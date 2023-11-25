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
};
