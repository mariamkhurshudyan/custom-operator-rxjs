import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css'],
})
export class FibonacciComponent  {
  @Input() sourceNum!: number;
  @Input() fibNum!: number;
}
