import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAdminComponent } from './links-admin.component';

describe('LinksAdminComponent', () => {
  let component: LinksAdminComponent;
  let fixture: ComponentFixture<LinksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
