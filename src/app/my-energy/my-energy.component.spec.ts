import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEnergyComponent } from './my-energy.component';

describe('MyEnergyComponent', () => {
  let component: MyEnergyComponent;
  let fixture: ComponentFixture<MyEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEnergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
