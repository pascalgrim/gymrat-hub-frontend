import { api } from "../../util/axios";

export async function getDates(userId?: number) {
  if (!userId) return [];
  const { data } = await api.get("/set/dates/" + userId);
  const dates: Date[] = [];
  data.forEach((str: string) => {
    dates.push(new Date(str));
  });
  return dates;
}
