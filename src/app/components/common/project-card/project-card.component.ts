import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Project } from '../../../models/project.model';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
