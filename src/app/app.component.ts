import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { BioComponent } from './components/bio/bio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgClass } from '@angular/common';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { BackToTopButtonComponent } from './components/common/back-to-top-button/back-to-top-button.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/common/footer/footer.component';
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
    AboutMeComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'portfolio_frontend';

}
