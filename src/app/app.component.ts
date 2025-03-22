import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertionComponent } from "./component/convertion/convertion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConvertionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'currency';
}
