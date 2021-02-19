import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MyDeviceComponent } from './my-device/my-device.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'my-device',
    component: MyDeviceComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
