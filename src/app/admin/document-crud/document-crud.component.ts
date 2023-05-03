import { Component, OnInit, Inject } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-document-crud',
  templateUrl: './document-crud.component.html',
  styleUrls: ['./document-crud.component.scss']
})
export class DocumentCrudComponent implements OnInit {

  constructor(private documentService: DocumentsService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closePopup() {
    this.popup.closeAll();
  }

}
