import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService, Task } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(
      createTaskDto.title,
      createTaskDto.description,
    );
  }

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Task | undefined {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() body: { title: string; description: string },
  ): Task | undefined {
    return this.taskService.updateTask(id, body.title, body.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
