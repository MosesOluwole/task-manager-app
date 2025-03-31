import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(private readonly em: EntityManager) {}

  async createTask(title: string, description: string): Promise<Task> {
    const task = new Task();
    task.title = title;
    task.description = description;
    await this.em.persistAndFlush(task);
    return task;
  }

  async getAllTasks(): Promise<Task[]> {
    return this.em.find(Task, {});
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.em.findOne(Task, { id });
  }

  async updateTask(
    id: number,
    title: string,
    description: string,
  ): Promise<Task | null> {
    const task = await this.em.findOne(Task, { id });
    if (!task) return null;
    task.title = title;
    task.description = description;
    await this.em.flush();
    return task;
  }

  async deleteTask(id: number): Promise<boolean> {
    const task = await this.em.findOne(Task, { id });
    if (!task) return false;
    await this.em.removeAndFlush(task);
    return true;
  }
}
