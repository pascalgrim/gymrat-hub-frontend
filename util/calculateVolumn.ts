export function calculateVolumn(exerciseDay: ExerciseDay) {
  var sum = 0;
  exerciseDay.Sets.forEach((set) => {
    sum += set.reps * set.weight;
  });
  return sum;
}
