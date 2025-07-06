import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-with-top-nav',
  imports: [TopNavComponent, RouterOutlet],
  templateUrl: './with-top-nav.component.html',
  styleUrl: './with-top-nav.component.scss'
})
export class WithTopNavComponent {

}
