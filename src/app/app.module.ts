import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

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
    AppComponent,
    ChatwindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
