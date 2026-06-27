import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects-list/project-details/project-details.component';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsListComponent,
    ProjectDetailsComponent,
    ProjectFormComponent
  ],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  selectedProjectId: number | null = null;
  showForm = false;

  openProject(id: number) {
    this.selectedProjectId = id;
  }

  backToList() {
    this.selectedProjectId = null;
  }

  createProject() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }
}