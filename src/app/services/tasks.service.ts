import { Injectable, Output } from '@angular/core';
import { TaskModel } from '../home-page/tasks/task.model';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TasksService
{
  @Output() newTaskEvent = new EventEmitter<{ id: string, name: string, status: boolean }[]>();
  taskList: { id: string, name: string, status: boolean }[];
  constructor()
  {
    this.taskList = [new TaskModel(uuidv4(), "Test task 1", true), new TaskModel(uuidv4(), "Test task 2", false)]
  }

  addTask(task: string)
  {
    if (task)
    {
      this.taskList.push(new TaskModel(uuidv4(), task, true))
      this.newTaskEvent.emit(this.taskList)
    }
  }
  deleteTask(id: String)
  {
    this.taskList = this.taskList.filter(task => task.id !== id)
    this.newTaskEvent.emit(this.taskList)
  }
  updateStatus(id: string)
  {

    for (let task of this.taskList)
    {
      if (task.id === id)
      {
        console.log(id)
        task.status = !task.status
        this.newTaskEvent.emit(this.taskList)
      }
    }
  }

  updateTaskName(id: string, name: string)
  {
    for (let task of this.taskList)
    {
      if (task.id === id)
      {
        console.log(task.name, name)
        task.name = name;
        console.log(this.taskList)
        this.newTaskEvent.emit(this.taskList)
      }
    }
  }

  deleteAllFinishedTasks()
  {
    this.taskList = this.taskList.filter(task => task.status)
    this.newTaskEvent.emit(this.taskList)
  }
}
