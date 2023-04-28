import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderAdminComponent } from './folder-admin.component';

describe('FolderAdminComponent', () => {
  let component: FolderAdminComponent;
  let fixture: ComponentFixture<FolderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
