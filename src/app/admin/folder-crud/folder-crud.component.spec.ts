import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderCrudComponent } from './folder-crud.component';

describe('FolderCrudComponent', () => {
  let component: FolderCrudComponent;
  let fixture: ComponentFixture<FolderCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
