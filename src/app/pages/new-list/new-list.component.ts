import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskServiceService} from '../../shared/task-service.service';
import {AbvEventEmitters} from '../../emitters/abv.event.emitters';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(
    private taskService: TaskServiceService,
    private abvEventEmitters: AbvEventEmitters
  ) {

  }

  ngOnInit(): void {
  }

  createList(title: string) {
    this.taskService.createNewList(title);
    this.abvEventEmitters.broadcastNewListAdded(title);
  }

}
