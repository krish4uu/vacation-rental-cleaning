import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { Delete, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() task: Task): Task {
    return this.tasksService.createTask(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Task[] {
    return this.tasksService.deleteTask(id);
  }
}
