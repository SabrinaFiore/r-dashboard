import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactVisualizationComponent } from './impact-visualization.component';

describe('ImpactVisualizationComponent', () => {
  let component: ImpactVisualizationComponent;
  let fixture: ComponentFixture<ImpactVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
