import { Injectable } from '@nestjs/common';

import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  //Return all tasks
  getAllTasks(): Task[] {
    // return the tasks array
    return this.tasks;
  }

  //Return a task by id
  getTaskById(id: string): Task {
    // find the task with the id that matches the id passed in and return it
    return this.tasks.find((task) => task.id === id);
  }
  //Create a new task and add it to the tasks array
  createTask(createTaskDto: CreateTaskDto): Task {
    // extract the title and description from the createTaskDto
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

  //Delete a task by id
  // delete the task with the id that matches the id passed in and return it
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
