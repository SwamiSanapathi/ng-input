import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet/>',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export default class AppComponent {
  title = 'ng-input-required';
}
