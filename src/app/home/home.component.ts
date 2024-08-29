import { Component } from '@angular/core';
import { HeaderComponent } from '../part/header/header.component';
import { NavComponent } from '../part/nav/nav.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavComponent,
    ContentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
