import { Component, OnInit, Inject } from '@angular/core';
import { FoldersService } from 'src/app/services/folders.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-folder-crud',
  templateUrl: './folder-crud.component.html',
  styleUrls: ['./folder-crud.component.scss']
})
export class FolderCrudComponent implements OnInit {

  constructor(private folderService: FoldersService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closePopup() {
    this.popup.closeAll();
  }

}
