import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      image: '../../../assets/skills/angular.png',
      progress: 8,
    },
    {
      name: 'Python',
      image: '../../../assets/skills/python.png',
      progress: 8,
    },
    {
      name: 'TypeScript',
      image: '../../../assets/skills/typescript.png',
      progress: 8,
    },
    {
      name: 'MongoDB',
      image: '../../../assets/skills/mongodb.png',
      progress: 6,
    },
    {
      name: 'NodeJs',
      image: '../../../assets/skills/node.png',
      progress: 6,
    },
    {
      name: 'Scss',
      image: '../../../assets/skills/sass.png',
      progress: 6,
    },
    {
      name: 'Wordpress',
      image: '../../../assets/skills/wordpress.png',
      progress: 6,
    },
    {
      name: 'Tensorflow',
      image: '../../../assets/skills/tensorflow.png',
      progress: 4,
    },
  ];
}
