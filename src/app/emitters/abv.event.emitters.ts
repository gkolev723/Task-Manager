import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AbvEventEmitters {
  private readonly newListAdded = new Subject<string>();
  private readonly newTaskAdded = new Subject<{list: string, task: string}>();

  public newListAdded$ = this.newListAdded.asObservable();
  public newTaskAdded$ = this.newTaskAdded.asObservable();

  public broadcastNewListAdded(list: string) {
    this.newListAdded.next(list);
  }


}

