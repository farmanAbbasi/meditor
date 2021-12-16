import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// npm i firebase angularfire2 --save
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from "@angular/fire";
// import {
//   AngularFireStorageModule,
//   AngularFireStorageReference,
//   AngularFireUploadTask,
//   StorageBucket
// } from "@angular/fire/storage";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBXhX2f8X6hF9fBE3gAQRpm3DRX8_DUHW0",
  authDomain: "movie-app-4ec6c.firebaseapp.com",
  databaseURL: "https://movie-app-4ec6c.firebaseio.com",
  projectId: "movie-app-4ec6c",
  storageBucket: "movie-app-4ec6c.appspot.com",
  messagingSenderId: "181969656255",
  appId: "1:181969656255:web:cc8c4d75662ad5dff7290a"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireAuthModule
    // AngularFireStorageModule,
    // AngularFireModule.initializeApp(firebaseConfig, "cloud")
    
  ],
  providers: [ 
    // { provide: StorageBucket, useValue: "movie-app-4ec6c.appspot.com" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
