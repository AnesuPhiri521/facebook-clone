import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './facebook/pages/home/home.component';
import { LoginComponent } from './facebook/pages/login/login.component';
import { SignupComponent } from './facebook/pages/signup/signup.component';
import { NavBarComponent } from './facebook/componets/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { HomeRightComponent } from './facebook/componets/home-right/home-right.component';
import { HomeCenterComponent } from './facebook/componets/home-center/home-center.component';
import { HomeLeftComponent } from './facebook/componets/home-left/home-left.component';
import { StoriesReelsComponent } from './facebook/componets/stories-reels/stories-reels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    HomeRightComponent,
    HomeCenterComponent,
    HomeLeftComponent,
    StoriesReelsComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
