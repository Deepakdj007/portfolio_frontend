import { Component } from '@angular/core';
import { ProjectCardComponent } from '../common/project-card/project-card.component';
import { Project } from '../../models/project.model';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Project 1',
      image: '../../../assets/project-images/picture1.jpg',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Live Preview',
      action2: 'Check on Github',
    },
    {
      name: 'Project 2',
      image: '../../../assets/project-images/picture2.png',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Demo Video',
      action2: 'Check on Github',
    },
    {
      name: 'Project 1',
      image: '../../../assets/project-images/picture1.jpg',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Live Preview',
      action2: 'Check on Github',
    },
    {
      name: 'Project 2',
      image: '../../../assets/project-images/picture2.png',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Demo Video',
      action2: 'Check on Github',
    },
    {
      name: 'Project 1',
      image: '../../../assets/project-images/picture1.jpg',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Live Preview',
      action2: 'Check on Github',
    },
    {
      name: 'Project 2',
      image: '../../../assets/project-images/picture2.png',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Demo Video',
      action2: 'Check on Github',
    },
    {
      name: 'Project 1',
      image: '../../../assets/project-images/picture1.jpg',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Live Preview',
      action2: 'Check on Github',
    },
    {
      name: 'Project 2',
      image: '../../../assets/project-images/picture2.png',
      description: 'lorem ipsum dolor sit amet',
      action1: 'Demo Video',
      action2: 'Check on Github',
    },
  ];
}
