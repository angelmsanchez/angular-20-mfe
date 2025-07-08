import { Component, inject } from '@angular/core';
// import { AuthService } from 'auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-20-mfe';
  // authService = inject(AuthService);

  ngOnInit(): void {
    // console.log('ngOninit MFE: ', this.authService.userName);
  }

  sendData() {
    const event = new CustomEvent('event', { detail: 'Hello mfe two:)' });
    dispatchEvent(event);
  }
}
