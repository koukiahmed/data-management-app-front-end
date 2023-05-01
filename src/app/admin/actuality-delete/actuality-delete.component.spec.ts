import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityDeleteComponent } from './actuality-delete.component';

describe('ActualityDeleteComponent', () => {
  let component: ActualityDeleteComponent;
  let fixture: ComponentFixture<ActualityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
