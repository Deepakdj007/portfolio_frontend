import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { BioComponent } from './components/bio/bio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgClass } from '@angular/common';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { BackToTopButtonComponent } from './components/common/back-to-top-button/back-to-top-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavBarComponent,
    BioComponent,
    ProjectsComponent,
    SkillsComponent,
    NgClass,
    SoftSkillsComponent,
    BackToTopButtonComponent,
  ],
})
export class AppComponent {
  title = 'portfolio_frontend';

  //Function to scroll to top on button click
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
