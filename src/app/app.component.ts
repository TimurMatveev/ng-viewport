import { Component } from '@angular/core';
import { NgViewportComponent } from './lib/ng-viewport/components/ng-viewport/ng-viewport.component';

@Component({
  selector: 'app-root',
  imports: [NgViewportComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
