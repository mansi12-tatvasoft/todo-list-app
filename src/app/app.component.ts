import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from '../Components/to-do-list/to-do-list.component';
import { FormComponent } from '../Components/form/form.component';
import { ToDoItem } from '../ToDoItem';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent, FormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list-app';
  toDoList: ToDoItem[] = [
  ];

  addTodoItem(item: ToDoItem) {
    this.toDoList.push(item);
  }

  deleteTodoItem(todoItem: any): void {
    this.toDoList = this.toDoList.filter((item) => item !== todoItem);
  }
}
