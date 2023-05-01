import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityAddComponent } from './actuality-add.component';

describe('ActualityAddComponent', () => {
  let component: ActualityAddComponent;
  let fixture: ComponentFixture<ActualityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
