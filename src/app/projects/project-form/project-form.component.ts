import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  imports: [FormsModule]
})
export class ProjectFormComponent {

  model = {
    projectName: '',
    description: '',
    dueDate: ''
  };

  constructor(private router: Router) {}

  save() {
    console.log(this.model);
    this.router.navigate(['/projects']);
  }

  cancel() {
    this.router.navigate(['/projects']);
  }
}