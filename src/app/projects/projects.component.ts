import { Component } from '@angular/core';
import { ProjectDetailsComponent} from './projects/projects-list/project-details/project-details.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
    imports: [
    CommonModule

  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
