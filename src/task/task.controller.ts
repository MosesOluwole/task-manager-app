import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskService, Task } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // Protect this route
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(
      createTaskDto.title,
      createTaskDto.description,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard) // Protect this route
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) // Protect this route
  getTaskById(@Param('id') id: number): Task | undefined {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) // Protect this route
  updateTask(
    @Param('id') id: number,
    @Body() body: { title: string; description: string },
  ): Task | undefined {
    return this.taskService.updateTask(id, body.title, body.description);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) // Protect this route
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
