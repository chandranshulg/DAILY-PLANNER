import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

class Workout {
    private String name;
    private String equipmentRequired;
    private String category;  // Cardio, Strength, Flexibility

    public Workout(String name, String equipmentRequired, String category) {
        this.name = name;
        this.equipmentRequired = equipmentRequired;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public String getEquipmentRequired() {
        return equipmentRequired;
    }

    public String getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return name + " (" + category + ", Equipment: " + equipmentRequired + ")";
    }
}

class WorkoutPlan {
    private List<Workout> workouts;

    public WorkoutPlan() {
        workouts = new ArrayList<>();
    }

    public void addWorkout(Workout workout) {
        workouts.add(workout);
    }

    public void displayPlan() {
        System.out.println("Your Workout Plan:");
        for (Workout workout : workouts) {
            System.out.println(workout);
        }
    }
}

class WorkoutPlanner {
    private List<Workout> allWorkouts;

    public WorkoutPlanner() {
        allWorkouts = new ArrayList<>();
        initializeWorkouts();
    }

    private void initializeWorkouts() {
        // Cardio workouts
        allWorkouts.add(new Workout("Running", "None", "Cardio"));
        allWorkouts.add(new Workout("Cycling", "Bicycle", "Cardio"));
        allWorkouts.add(new Workout("Jump Rope", "Jump Rope", "Cardio"));

        // Strength workouts
        allWorkouts.add(new Workout("Push-ups", "None", "Strength"));
        allWorkouts.add(new Workout("Squats", "None", "Strength"));
        allWorkouts.add(new Workout("Bench Press", "Barbell", "Strength"));

        // Flexibility workouts
        allWorkouts.add(new Workout("Yoga Pose", "None", "Flexibility"));
        allWorkouts.add(new Workout("Stretching", "None", "Flexibility"));
        allWorkouts.add(new Workout("Pilates", "None", "Flexibility"));
    }

    public WorkoutPlan generatePlan(String goal, String equipment) {
        WorkoutPlan plan = new WorkoutPlan();
        Random random = new Random();

        List<Workout> filteredWorkouts = new ArrayList<>();
        for (Workout workout : allWorkouts) {
            if (equipment.equalsIgnoreCase("None") || workout.getEquipmentRequired().equalsIgnoreCase(equipment)) {
                filteredWorkouts.add(workout);
            }
        }

        if (goal.equalsIgnoreCase("Cardio")) {
            for (Workout workout : filteredWorkouts) {
                if (workout.getCategory().equalsIgnoreCase("Cardio")) {
                    plan.addWorkout(workout);
                }
            }
        } else if (goal.equalsIgnoreCase("Strength")) {
            for (Workout workout : filteredWorkouts) {
                if (workout.getCategory().equalsIgnoreCase("Strength")) {
                    plan.addWorkout(workout);
                }
            }
        } else if (goal.equalsIgnoreCase("Flexibility")) {
            for (Workout workout : filteredWorkouts) {
                if (workout.getCategory().equalsIgnoreCase("Flexibility")) {
                    plan.addWorkout(workout);
                }
            }
        } else {
            // General fitness: mix of all categories
            plan.addWorkout(filteredWorkouts.get(random.nextInt(filteredWorkouts.size())));
            plan.addWorkout(filteredWorkouts.get(random.nextInt(filteredWorkouts.size())));
            plan.addWorkout(filteredWorkouts.get(random.nextInt(filteredWorkouts.size())));
        }

        return plan;
    }
}

public class PersonalWorkoutPlanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        WorkoutPlanner planner = new WorkoutPlanner();

        System.out.println("Welcome to the Personal Workout Planner!");
        System.out.print("Enter your fitness goal (Cardio, Strength, Flexibility, General Fitness): ");
        String goal = scanner.nextLine();

        System.out.print("Enter the available equipment (e.g., None, Barbell, Jump Rope, Bicycle): ");
        String equipment = scanner.nextLine();

        WorkoutPlan plan = planner.generatePlan(goal, equipment);
        plan.displayPlan();
    }
}
