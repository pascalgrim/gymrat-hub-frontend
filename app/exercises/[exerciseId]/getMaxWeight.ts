export function getMaxWeight(exercise: Exercise) {
  if (exercise.ExerciseDays.length === 0) {
    return 0;
  }

  let max = exercise.ExerciseDays[0].Sets[0].weight;

  exercise.ExerciseDays.forEach((day) => {
    day.Sets.forEach((set) => {
      if (+set.weight > max) {
        max = set.weight;
      }
    });
  });

  return max;
}
