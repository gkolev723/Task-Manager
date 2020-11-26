import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {TaskServiceService} from '../../shared/task-service.service';
import {Subscription} from 'rxjs';
import {AbvEventEmitters} from '../../emitters/abv.event.emitters';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: string[] = new Array<string>();

  currentlySelectedTasks: Task[] = [];
  currentlySelectedList: string = null;


  constructor(
    private taskService: TaskServiceService,
  ) { }


  ngOnInit() {
    this.lists = this.taskService.getLists();
    const currentlySelectedList = this.taskService.getCurrentlySelectedList();
    if (currentlySelectedList) {
      this.loadTasksForList(currentlySelectedList);
    }
  }

 complete(task: Task) {
    task.status = !task.status;

 }

  loadTasksForList(list) {
    this.currentlySelectedList = list;
    const tasks = this.taskService.getTasksForList(list);
    this.currentlySelectedTasks = tasks;
  }

  onXButtonClick(task: Task) {
   let i = this.currentlySelectedTasks.indexOf(task);
   this.currentlySelectedTasks.splice(i, 1);
  }

}
