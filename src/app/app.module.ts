import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyDeviceComponent } from './sections/my-device/my-device.component';
import { MyEnergyComponent } from './sections/my-energy/my-energy.component';
import { MyProfileComponent } from './sections/my-profile/my-profile.component';
import { ConsumptionDeviceComponent } from './sections/consumption-device/consumption-device.component';
import { ImpactVisualizationComponent } from './sections/impact-visualization/impact-visualization.component';
import { VisualizationComponent } from './sections/visualization/visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    FooterComponent,
    MyDeviceComponent,
    MyEnergyComponent,
    CardComponent,
    MyProfileComponent,
    ImpactVisualizationComponent,
    ConsumptionDeviceComponent,
    VisualizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
