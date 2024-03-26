import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  // Get all tasks
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  // get decorator with a url parameter of id
  @Get('/:id')
  // Get a task by id
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  // delete decorator with a url parameter of id
  @Delete('/:id')
  // Delete a task by id
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Post()
  // Create a new task
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}

// moved to DTO rather than passing in title and description separately
//   createTask(
//     // The @Body() decorator is used to extract the title and description from the request body
//     @Body('title') title: string,
//     @Body('description') description: string,
//     // set the return type of the createTask method to Task
//   ): Task {
//     // call the createTask method from the tasksService and pass in the title and description
//     return this.tasksService.createTask(title, description);
//   }
