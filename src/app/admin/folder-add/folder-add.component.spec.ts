import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderAddComponent } from './folder-add.component';

describe('FolderAddComponent', () => {
  let component: FolderAddComponent;
  let fixture: ComponentFixture<FolderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
