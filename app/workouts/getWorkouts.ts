import { api } from "../../util/axios";

export async function getWorkouts(userId?: number) {
  if (!userId) return [];
  const { data } = await api.get("/workout/user/" + userId);
  return data as Workout[];
}
