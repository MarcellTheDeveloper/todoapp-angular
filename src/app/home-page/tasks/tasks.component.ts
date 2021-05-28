import { TasksService } from './../../services/tasks.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit
{
  checkboxChecked = false;
  @ViewChild("taskInput") taskinput: ElementRef;
  constructor(public taskService: TasksService)
  {

  }
  ngOnInit(): void
  {
  }

  onAddTask()
  {
    console.log()
    this.taskService.addTask(this.taskinput.nativeElement.value)
    this.taskinput.nativeElement.value = ""
  }
  onDeleteAllFinishedTasks()
  {
    if (confirm('Are you sure you want to delete all finished tasks?'))
    {
      this.taskService.deleteAllFinishedTasks()
    }
  }
}
