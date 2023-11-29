export function extractExercisesFromWorkoutObject(workout: Workout) {
  var arr: Exercise[] = [];
  workout.exercises.forEach((ex) => {
    arr.push(ex.exercise);
  });
  return arr;
}
