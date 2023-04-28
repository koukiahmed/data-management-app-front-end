import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityBodyComponent } from './actuality-body.component';

describe('ActualityBodyComponent', () => {
  let component: ActualityBodyComponent;
  let fixture: ComponentFixture<ActualityBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
