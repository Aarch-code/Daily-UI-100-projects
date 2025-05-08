const form = document.getElementById("workoutForm");
const list = document.getElementById("workoutList");

function getWorkouts() {
  return JSON.parse(localStorage.getItem("workouts")) || [];
}

function saveWorkouts(workouts) {
  localStorage.setItem("workouts", JSON.stringify(workouts));
}

function addWorkoutToDOM(workout) {
  const li = document.createElement("li");
  li.textContent = `${workout.exercise} - ${workout.sets} sets × ${workout.reps} reps` + 
    (workout.weight ? ` @ ${workout.weight}kg` : '');
  list.appendChild(li);
}

function loadWorkouts() {
  const workouts = getWorkouts();
  list.innerHTML = "";
  workouts.forEach(addWorkoutToDOM);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const exercise = document.getElementById("exercise").value.trim();
  const sets = +document.getElementById("sets").value;
  const reps = +document.getElementById("reps").value;
  const weight = +document.getElementById("weight").value;

  const workout = { exercise, sets, reps, weight };

  const workouts = getWorkouts();
  workouts.push(workout);
  saveWorkouts(workouts);

  addWorkoutToDOM(workout);
  form.reset();
});

loadWorkouts();
