import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs';
import {AbvEventEmitters} from '../emitters/abv.event.emitters';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  // myMap: Map<string, number[]> = new Map();
  // myMap.set("kop4e", [12, 0, 12,3, 5, 987]);
  // myMap.set("riza", [0,9,3,4]);
  // myMap.set("gerdan", [99,56,777,89]);

  //myMap.get("riza")  ->   [0,9,3,4]


  map: Map<string, Task[]> = new Map();
  currentlySelectedList: string = null;

  constructor() { }

  getLists(): string[] {
    return Array.from(this.map.keys());
  }

  getTasksForList(id: string) {
    return this.map.get(id);
  }

  createNewList(task: string) {
    this.map.set(task, []);
  }

  deleteList(id: string) {
    this.map.delete(id);
  }

  getCurrentlySelectedList() {
    return this.currentlySelectedList;
  }

  addTaskForList(list: string, task: Task) {
    this.map.get(list).push(task);
    if (this.currentlySelectedList !== list) {
      this.currentlySelectedList = list;
    }
  }

}
