import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ConsumptionDeviceComponent } from './sections/consumption-device/consumption-device.component';
import { ImpactVisualizationComponent } from './sections/impact-visualization/impact-visualization.component';
import { MyDeviceComponent } from './sections/my-device/my-device.component';
import { MyEnergyComponent } from './sections/my-energy/my-energy.component';
import { VisualizationComponent } from './sections/visualization/visualization.component';

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
      },
      {
        path: 'section/consumption-device',
        component: ConsumptionDeviceComponent,
      },
      {
        path: 'section/impact-visualization',
        component: ImpactVisualizationComponent,
      },
      {
        path: 'section/visualization',
        component: VisualizationComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
