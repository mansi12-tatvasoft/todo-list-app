import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoComponent } from '../to-do/to-do.component';
import { CommonModule } from '@angular/common';
import { ToDoItem } from '../../ToDoItem';
@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoComponent, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  @Input() toDoList: ToDoItem[] = [];
  @Output() deleteItem = new EventEmitter<ToDoItem>();

  deleteTodoItem(todoItem: any): void {
    this.deleteItem.emit(todoItem);
  }
}
