import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  @Input() title: string = '';
  @Input() isCompleted: boolean = false;
  @Output() deleteTodoItem = new EventEmitter<void>();

  onDelete(): void {
    this.deleteTodoItem.emit();
  }
}
