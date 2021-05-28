import { TasksService } from 'src/app/services/tasks.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit
{
  taskInputState = true;
  @Input() task: { id: string, name: string, status: boolean };
  constructor(public taskService: TasksService) { }

  ngOnInit(): void
  {
    console.log(this.task)
  }
  onDeleteTask()
  {
    if (confirm("Are you sure you want to delete?"))
    {
      this.taskService.deleteTask(this.task.id)
    }


  }
  onUpdateStatus()
  {
    this.taskService.updateStatus(this.task.id)
  }
  onUpdateState()
  {
    this.taskInputState = !this.taskInputState
  }
  onUpdateTaskName()
  {
    this.taskService.updateTaskName(this.task.id, this.task.name)
    this.taskInputState = !this.taskInputState
  }
  lineThroughOrNot()
  {
    return this.task.status ? "none" : "line-through"
  }
}
