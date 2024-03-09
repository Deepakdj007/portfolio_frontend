import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      image: '../../../assets/skills/angular.png',
      progress: 10,
    },
    {
      name: 'Python',
      image: '../../../assets/skills/python.png',
      progress: 10,
    },
    {
      name: 'TypeScript',
      image: '../../../assets/skills/typescript.png',
      progress: 10,
    },
    {
      name: 'MongoDB',
      image: '../../../assets/skills/mongodb.png',
      progress: 8,
    },
    {
      name: 'NodeJs',
      image: '../../../assets/skills/node.png',
      progress: 8,
    },
    {
      name: 'Scss',
      image: '../../../assets/skills/sass.png',
      progress: 8,
    },
    {
      name: 'Wordpress',
      image: '../../../assets/skills/wordpress.png',
      progress: 8,
    },
    {
      name: 'Tensorflow',
      image: '../../../assets/skills/tensorflow.png',
      progress: 6,
    },
  ];
}
