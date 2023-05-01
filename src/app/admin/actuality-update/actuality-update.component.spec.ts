import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityUpdateComponent } from './actuality-update.component';

describe('ActualityUpdateComponent', () => {
  let component: ActualityUpdateComponent;
  let fixture: ComponentFixture<ActualityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
