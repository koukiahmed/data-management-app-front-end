import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Document } from 'src/app/shared/document';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.scss']
})
export class DocumentUpdateComponent implements OnInit {

  constructor(private documentService: DocumentsService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  documents: Document[]
  selectedDocument:Document;
  editObject: Document;
  @ViewChild('documentUpdateForm') form: NgForm;

  ngOnInit(): void {
    this.getOneDocument();
  }

  //function to get all documents then find the selected document with id and display data to form
  getOneDocument(){
    this.documentService.getAllDocuments().subscribe((res)=>{
      this.documents = res;
      this.selectedDocument = this.documents.find((d)=>{return d.id === this.data.id})

      this.form.setValue({
        id: this.selectedDocument.id,
        folder: this.selectedDocument.folder,
      })

    })
  }

  //function for update document folder name
  updateDocument(editObject: Document){
    this.documentService.updateDocument(editObject).subscribe((res)=>{
      this.closePopup();
      this.toastr.success(res.message)
    },
    (error: any) => this.toastr.error(error.message)
    )
  }

  closePopup() {
    this.popup.closeAll();
  }
}
