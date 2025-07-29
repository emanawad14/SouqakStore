import { Component } from '@angular/core';
import { NavComponent } from '../../../core/layouts/nav/nav.component';
import { FootnavComponent } from '../../../core/layouts/footnav/footnav.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, FootnavComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
