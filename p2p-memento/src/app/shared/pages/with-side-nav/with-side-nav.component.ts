import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-with-side-nav',
  imports: [RouterOutlet, MatSidenavModule, MatButton],
  templateUrl: './with-side-nav.component.html',
  styleUrl: './with-side-nav.component.scss'
})
export class WithSideNavComponent {

}
