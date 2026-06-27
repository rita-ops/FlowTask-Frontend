import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent {

  @Output() open = new EventEmitter<number>();
  @Output() create = new EventEmitter<void>();

  projects = [
    { projectId: 1, projectName: 'Demo Project' }
  ];
}