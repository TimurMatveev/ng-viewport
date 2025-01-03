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

  constructor() {
    // setInterval(() => {
    //   this.touches.set([
    //     { id: 1, x: Math.random(), y: Math.random() },
    //     { id: 2, x: Math.random(), y: Math.random() },
    //     { id: 3, x: Math.random(), y: Math.random() },
    //   ])
    // }, 1000);
  }

  onTouchStart(event: TouchEvent): void {
    if (!this.maxTouches) {
      return;
    }

    event.preventDefault();
    this.touches.set(Array.from(event.touches).map((touch, index) => ({ id: index + 1, x: touch.screenX, y: touch.screenY })));
  }

  onMouseDown(event: MouseEvent): void {
    if (this.maxTouches) {
      return;
    }

    event.preventDefault();
    this.touches.set([{ id: 1, x: event.screenX, y: event.screenY }]);
  }

  counter = 1;
  increment(): void {
    this.counter++;
  }
}
