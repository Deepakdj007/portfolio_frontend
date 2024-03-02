import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ProjectCardComponent } from '../common/project-card/project-card.component';
import { Project } from '../../models/project.model';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
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
  cardWidth!: number;
  mutationObserver!: MutationObserver;

  @ViewChild('projectCards') projectCardsRef!: ElementRef;

  ngAfterViewInit() {
    this.calculateCardWidth();
  }
  ngOnDestroy() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  scrollLeft() {
    const projectCards: HTMLElement = this.projectCardsRef.nativeElement;
    projectCards.scrollTo({
      left: projectCards.scrollLeft - this.cardWidth, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const projectCards: HTMLElement = this.projectCardsRef.nativeElement;
    projectCards.scrollTo({
      left: projectCards.scrollLeft + this.cardWidth + 20, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  }

  calculateCardWidth() {
    const firstProjectCard =
      this.projectCardsRef.nativeElement.querySelector('app-project-card');
    if (firstProjectCard) {
      this.cardWidth = firstProjectCard.offsetWidth - 20;
    }
  }
}
