import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatListModule}  from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
})
export class HomeModule { }
