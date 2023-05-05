import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FoldersService } from 'src/app/services/folders.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Folder } from 'src/app/shared/folder';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-folder-crud',
  templateUrl: './folder-crud.component.html',
  styleUrls: ['./folder-crud.component.scss']
})
export class FolderCrudComponent implements OnInit {

  constructor(private folderService: FoldersService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  editObject: Folder;
  @ViewChild('folderForm') form: NgForm;
  editMode: boolean = false;

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.folderService.getOneFolder(this.data.id).subscribe((data)=>{
        this.editObject = data;

        this.form.setValue({
          id: this.editObject.id,
          title: this.editObject.title,
          userName: this.editObject.userName,
        })
      })
      this.editMode=true;
    }
  }

  saveFolder(folderObject: Folder){
    if(!this.editMode){
      this.folderService.addFolder(folderObject)
      .subscribe(
        (res)=>{
        this.closePopup();
        this.toastr.success(res.message);
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
    else{
      this.folderService.updateFolder(folderObject).subscribe((res)=>{
        this.closePopup();
        this.toastr.success(res.message)
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
  }

  closePopup() {
    this.popup.closeAll();
  }

}
