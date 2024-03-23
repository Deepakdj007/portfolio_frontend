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
      id: 1,
      name: 'Angular',
      image: '../../../assets/skills/angular.png',
      description:
        'I have over 1 year of professional experience using Angular and additional experience gained through hobby projects.',
      progress: 8,
    },
    {
      id: 2,
      name: 'Python',
      image: '../../../assets/skills/python.png',
      description:
        'I have over 4 years of experience using Python through hobby projects.',
      progress: 8,
    },
    {
      id: 3,
      name: 'TypeScript',
      image: '../../../assets/skills/typescript.png',
      description:
        'I have over 1 year of professional experience using Typescript and additional experience gained through hobby projects.',
      progress: 8,
    },
    {
      id: 4,
      name: 'MongoDB',
      image: '../../../assets/skills/mongodb.png',
      description:
        'I have over 2 years of experience using MongoDB through hobby projects.',
      progress: 6,
    },
    {
      id: 5,
      name: 'NodeJs',
      image: '../../../assets/skills/node.png',
      description:
        'I have over 2 years of experience using NodeJs through hobby projects.',
      progress: 6,
    },
    {
      id: 6,
      name: 'Scss',
      image: '../../../assets/skills/sass.png',
      description:
        'I have over 1 year of professional experience using Scss and additional experience gained through hobby projects.',
      progress: 6,
    },
    {
      id: 7,
      name: 'Wordpress',
      image: '../../../assets/skills/wordpress.png',
      description:
        'I have over 1 year of professional experience using Wordpress and additional experience gained through my own website built using Wordpress.',
      progress: 6,
    },
    {
      id: 8,
      name: 'Tensorflow',
      image: '../../../assets/skills/tensorflow.png',
      description:
        'I have over 2 years of experience using Tensorflow through hobby projects.',
      progress: 4,
    },
  ];
}
