import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    return this.taskService.createTask(body.title, body.description);
  }

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() body: { title: string; description: string },
  ) {
    return this.taskService.updateTask(id, body.title, body.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
