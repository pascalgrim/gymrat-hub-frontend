import { api } from "../../util/axios";

export async function getWorkouts(userId: number) {
  const { data } = await api.get("/workout/user/" + userId);
  return data as Workout[];
}
