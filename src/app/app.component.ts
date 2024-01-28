import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { BioComponent } from './components/bio/bio.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavBarComponent, BioComponent],
})
export class AppComponent {
  title = 'portfolio_frontend';
}
