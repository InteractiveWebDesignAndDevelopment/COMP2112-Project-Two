import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';

// Firebase config file
const firebaseConfig = {
    apiKey: "AIzaSyD1cAWGvM6v5wFLcbJEmvA5xoJPSDXltGY",
    authDomain: "comp2112-chat.firebaseapp.com",
    databaseURL: "https://comp2112-chat.firebaseio.com",
    storageBucket: "comp2112-chat.appspot.com",
    messagingSenderId: "1090716101207"
  };

  const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
