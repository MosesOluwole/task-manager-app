import { Injectable } from '@nestjs/common';

// Defines the structure of a Task object
export interface Task {
  id: number; // Unique identifier for the task
  title: string; // Title of the task
  description: string; // Description of the task
  completed: boolean; // Task completion status
}

@Injectable() // Marks this service as injectable within the NestJS ecosystem
export class TaskService {
  private tasks: Task[] = []; // In-memory storage for tasks (not persistent)

  /**
   * Creates a new task and adds it to the tasks array.
   * @param title - Title of the task
   * @param description - Description of the task
   * @returns The newly created task object
   */
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: this.tasks.length + 1, // Assigns a unique ID based on the array length
      title,
      description,
      completed: false, // New tasks are not completed by default
    };
    this.tasks.push(task); // Adds the task to the array
    return task; // Returns the created task
  }

  /**
   * Retrieves all tasks stored in memory.
   * @returns An array of Task objects
   */
  getAllTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Finds a task by its unique ID.
   * @param id - The ID of the task to retrieve
   * @returns The Task object if found, otherwise undefined
   */
  getTaskById(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error(`Task with ID ${id} not found`);
    }
    return task;
  }

  /**
   * Updates the title and description of an existing task.
   * @param id - The ID of the task to update
   * @param title - The new title
   * @param description - The new description
   * @returns The updated Task object or undefined if not found
   */
  updateTask(id: number, title: string, description: string): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.title = title;
      task.description = description;
    }
    return task;
  }

  /**
   * Deletes a task from the tasks array by its ID.
   * @param id - The ID of the task to delete
   * @returns true if the task was deleted, false if not found
   */
  deleteTask(id: number): boolean {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index > -1) {
      this.tasks.splice(index, 1); // Removes the task from the array
      return true;
    }
    return false;
  }
}
