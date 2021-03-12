import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionDeviceComponent } from './consumption-device.component';

describe('ConsumptionDeviceComponent', () => {
  let component: ConsumptionDeviceComponent;
  let fixture: ComponentFixture<ConsumptionDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
