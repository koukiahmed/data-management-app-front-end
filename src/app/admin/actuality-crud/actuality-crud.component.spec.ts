import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityCrudComponent } from './actuality-crud.component';

describe('ActualityCrudComponent', () => {
  let component: ActualityCrudComponent;
  let fixture: ComponentFixture<ActualityCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
