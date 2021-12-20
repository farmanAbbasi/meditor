import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
// npm i firebase@6 @angular/fire@^5.2.0 --save
// as for angular 8 the above version of firebase works
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  StorageBucket
} from "@angular/fire/storage";

import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDdpgwQYIZnRrPisAaQ7Ch-1LGfWB6pYas",
  authDomain: "fire-blogs-app.firebaseapp.com",
  databaseURL: "https://fire-blogs-app.firebaseio.com",
  projectId: "fire-blogs-app",
  storageBucket: "fire-blogs-app.appspot.com",
  messagingSenderId: "107624863648",
  appId: "1:107624863648:web:50371d48939135167a36c5"
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
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig, "cloud"),
    ImageCropperModule
    
    
  ],
  providers: [ 
    { provide: StorageBucket, useValue: "fire-blogs-app.appspot.com" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
