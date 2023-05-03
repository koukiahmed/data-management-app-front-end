import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCrudComponent } from './links-crud.component';

describe('LinksCrudComponent', () => {
  let component: LinksCrudComponent;
  let fixture: ComponentFixture<LinksCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
