import { api } from "../../util/axios";

export async function getExercises(userId?: number) {
  if (!userId) return [];
  const { data } = await api.get(`/exercise/user/${userId}`);
  return data as Exercise[];
}
