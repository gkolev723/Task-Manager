import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbvEventEmitters} from '../../emitters/abv.event.emitters';
import {TaskServiceService} from '../../shared/task-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  private list: string ;

  constructor(
    private taskService: TaskServiceService,
    private abvEventEmitters: AbvEventEmitters,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const sub = this.route.queryParams.subscribe(params => {
      const list = params.list;
      if (list) {
        this.list = list;
      }
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    while (this.subscriptions.length > 0) {
      this.subscriptions.pop().unsubscribe();
    }
  }

  createTask(title: string) {
    // if(this.list !== null || typeof(this.list) !=='undefined' || this.list !== '')
    if (this.list) {
      this.taskService.addTaskForList(this.list, new Task(title));
    }
  }

}
