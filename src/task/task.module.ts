import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Task } from '../entities/task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
