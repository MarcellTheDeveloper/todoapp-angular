import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { TasksComponent } from './home-page/tasks/tasks.component';
import { ActiveTasksComponent } from './home-page/tasks/active-tasks/active-tasks.component';
import { InactiveTasksComponent } from './home-page/tasks/inactive-tasks/inactive-tasks.component';
import { SingleTaskComponent } from './home-page/tasks/single-task/single-task.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
FormsModule
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TasksComponent,
    ActiveTasksComponent,
    InactiveTasksComponent,
    SingleTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
