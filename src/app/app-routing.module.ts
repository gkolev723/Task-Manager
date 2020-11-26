import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TaskViewComponent} from './pages/task-view/task-view.component';
import {NewListComponent} from './pages/new-list/new-list.component';
import {NewTaskComponent} from './pages/new-task/new-task.component';

const routes: Routes = [
  {path: '', component: TaskViewComponent},
  { path: 'newlist', component: NewListComponent },
  { path: 'newtask', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
