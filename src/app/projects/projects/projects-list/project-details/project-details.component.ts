import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent {

  @Input() projectId!: number;
  @Input() project: any;   // or ProjectDetail

  @Output() back = new EventEmitter<void>();
}