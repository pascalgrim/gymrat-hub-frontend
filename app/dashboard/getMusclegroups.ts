import { api } from "../../util/axios";

type Res = {
  name: string;
  count: number;
};
type RadarCharItem = {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
};
export async function getMusclegroups(userId?: number) {
  if (!userId) return [];
  const { data } = await api.get("/musclegroup/" + userId);
  const muscles: Res[] = data;
  const res: RadarCharItem[] = [];
  muscles.forEach((muscle) => {
    res.push({
      subject: muscle.name,
      A: muscle.count,
      B: muscle.count,
      fullMark: 150,
    });
  });
  return res;
}
