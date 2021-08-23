import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { takeFibonacci } from './operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom operator RxJs';
  sourceNum = 0;
  fibNum = 0;
  source$ = interval(1000).pipe(
    tap(num => this.sourceNum = num),
    takeFibonacci(),
    tap(num => this.fibNum = num),
  );

  constructor() {
    this.source$.subscribe();
  }
}
