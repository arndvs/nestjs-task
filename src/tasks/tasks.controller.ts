import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  // Get all tasks
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  // Create a new task
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
//   createTask(
//     // The @Body() decorator is used to extract the title and description from the request body
//     @Body('title') title: string,
//     @Body('description') description: string,
//     // set the return type of the createTask method to Task
//   ): Task {
//     // call the createTask method from the tasksService and pass in the title and description
//     return this.tasksService.createTask(title, description);
//   }
