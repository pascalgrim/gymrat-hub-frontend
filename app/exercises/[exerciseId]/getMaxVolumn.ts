import { calculateVolumn } from "../../../util/calculateVolumn";

export function getMaxVolumn(exercise: Exercise) {
  if (exercise.ExerciseDays.length === 0) {
    return 0;
  }

  let max =
    +exercise.ExerciseDays[0].Sets[0].weight *
    exercise.ExerciseDays[0].Sets[0].reps;

  exercise.ExerciseDays.forEach((day) => {
    const vol = calculateVolumn(day);
    if (vol > max) {
      max = vol;
    }
  });

  return max;
}
