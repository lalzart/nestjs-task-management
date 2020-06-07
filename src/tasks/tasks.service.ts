import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';  

@Injectable()
export class TasksService { 
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ){}


  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();

  //   if(status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }

  //   if(search) {
  //     tasks = tasks.filter(task =>
  //       task.title.includes(search) ||
  //       task.description.includes(search)
  //     );
  //   }
  //   return tasks;
  // }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if(!found){
      throw new NotFoundException(`ID: ${id} not found`)
    }

    return found;
  }

  // getTaskById(id: string ): Task {
  //   const found = this.tasks.find(task => task.id === id);

  //   if(!found){
  //     throw new NotFoundException(`ID: ${id} not found`)
  //   }

  //   return found;
  // }

  // createTask(createTaskDTO: CreateTaskDto): Task {
  //   const { title, description } = createTaskDTO;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   }
    
  //   this.tasks.push(task);
  //   return task;
  // }

  // deleteTask(id: string): Task[] {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== found.id)
  //   return this.tasks
  // }
  
  // updateTask(id: string, status: TaskStatus ): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
