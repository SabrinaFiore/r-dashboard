import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MyDeviceComponent } from './my-device/my-device.component';
import { MyEnergyComponent } from './my-energy/my-energy.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'my-device',
    component: MyDeviceComponent,
  },
  {
    path: 'my-energy',
    component: MyEnergyComponent,
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
