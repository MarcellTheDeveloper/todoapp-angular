import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-inactive-tasks',
  templateUrl: './inactive-tasks.component.html',
  styleUrls: ['./inactive-tasks.component.scss']
})
export class InactiveTasksComponent implements OnInit
{

  taskList: { id: string, name: string, status: boolean }[];
  constructor(public taskService: TasksService)
  {
    this.taskList = taskService.taskList.filter(task => !task.status);
    this.taskService.newTaskEvent.subscribe(tasks => this.taskList = tasks.filter(task => !task.status))
  }

  ngOnInit(): void
  {
  }

}
