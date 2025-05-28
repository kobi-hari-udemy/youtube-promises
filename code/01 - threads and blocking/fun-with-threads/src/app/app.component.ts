import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    setInterval(() => {
      console.log('Tick');
    }, 3000);
  }

  // synchronous method / blocking
  callAlert() {
    console.log('Calling Alert');
    alert('This is an alert message!');
    console.log('Alert closed');
  }

  runTimeout() {
    console.log('Starting timeout');
    setTimeout(() => {
      console.log('Timeout completed');
    }, 10000);

    console.log('Timeout set for 5 seconds');
  }
}
