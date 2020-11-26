import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import {AppRoutingModule} from './app-routing.module';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import {AbvEventEmitters} from './emitters/abv.event.emitters';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AbvEventEmitters],
  bootstrap: [AppComponent]
})
export class AppModule {

}
