import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MyDeviceComponent } from './sections/my-device/my-device.component';
import { MyEnergyComponent } from './sections/my-energy/my-energy.component';

const routes: Routes = [
  {
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'section/my-device',
    component: MyDeviceComponent,
  },
  {
    path: 'section/my-energy',
    component: MyEnergyComponent,
  },
  {
    path: 'section/my-profile',
    component: MyEnergyComponent,
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
