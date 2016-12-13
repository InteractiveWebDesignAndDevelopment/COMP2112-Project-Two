import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Please Login!';
  username : string;
  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth !== null) {
        this.username = auth.auth.displayName;
        this.router.navigate(['/chatroom', this.username]);
      }
    });
  }
  login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
  }
}
