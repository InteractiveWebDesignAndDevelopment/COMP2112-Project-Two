import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Please Login!';
  username : string;
  auth ;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.username = auth.auth.displayName;
    });
  }
  login() {
    this.af.auth.login().then((event) => {
    });
  }
  logout() {
    this.af.auth.logout();
  }
}
