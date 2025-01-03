import { Component, signal } from '@angular/core';

@Component({
  selector: 'ng-viewport',
  imports: [],
  templateUrl: './ng-viewport.component.html',
  standalone: true,
  styleUrl: './ng-viewport.component.scss',
})
export class NgViewportComponent {
  touches = signal<{ id: number, x: number; y: number }[]>([]);

  maxTouches = window.navigator.maxTouchPoints;

  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    this.touches.set(Array.from(event.touches).map((touch, index) => ({ id: index + 1, x: touch.screenX, y: touch.screenY })));
  }
}
