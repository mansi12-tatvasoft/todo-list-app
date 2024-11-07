import { ToDoItem } from './../../ToDoItem';
import { Component, EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() addTodoItem = new EventEmitter<ToDoItem>();

  toDoItem: ToDoItem = { task: '', isCompleted: false };

  onAddTodoItem() {
    this.addTodoItem.emit(this.toDoItem);
    this.toDoItem = { task: '', isCompleted: false};
  }

}
