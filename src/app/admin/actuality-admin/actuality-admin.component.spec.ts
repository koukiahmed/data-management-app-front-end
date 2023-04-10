import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityAdminComponent } from './actuality-admin.component';

describe('ActualityAdminComponent', () => {
  let component: ActualityAdminComponent;
  let fixture: ComponentFixture<ActualityAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
