import { extractExercisesFromWorkoutObject } from "../../../lib/extractExercisesFromWorkoutObject";

export function getExercisesNotInWorkout(
  allExercises: Exercise[],
  workout: Workout
) {
  const workoutExercises = extractExercisesFromWorkoutObject(workout);
  const diff = allExercises.filter(
    (allExercises) =>
      !workoutExercises.some(
        (workoutExercise) =>
          workoutExercise.exercise_id === allExercises.exercise_id
      )
  );
  return diff;
}
