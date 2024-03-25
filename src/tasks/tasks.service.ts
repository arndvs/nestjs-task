import { Injectable } from '@nestjs/common';

import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  //Return all tasks
  getAllTasks(): Task[] {
    //
    return this.tasks;
  }

  //Create a new task and add it to the tasks array
  // takes in a title and description and returns the created task
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      // generate a unique id for the task
      id: uuid(),
      // set the title and description of the task and
      title,
      description,
      // sets the status of the task to OPEN
      status: TaskStatus.OPEN,
    };

    // add the created task to the tasks array
    this.tasks.push(task);
    return task;
  }
}
