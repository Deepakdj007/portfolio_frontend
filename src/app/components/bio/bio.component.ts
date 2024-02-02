import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';
@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
})
export class BioComponent {}
