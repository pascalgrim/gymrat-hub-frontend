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
