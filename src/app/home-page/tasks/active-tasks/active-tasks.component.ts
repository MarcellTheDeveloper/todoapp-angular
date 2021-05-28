import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss']
})
export class ActiveTasksComponent implements OnInit
{

  taskList: { id: string, name: string, status: boolean }[];
  constructor(public taskService: TasksService)
  {
    this.taskList = taskService.taskList.filter(task => task.status);
    this.taskService.newTaskEvent.subscribe(tasks => this.taskList = tasks.filter(task => task.status))
  }

  ngOnInit(): void
  {
    console.log(this.taskList)
  }

}
