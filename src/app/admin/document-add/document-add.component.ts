import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Document } from 'src/app/shared/document';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.scss']
})
export class DocumentAddComponent implements OnInit {

  constructor(private documentService: DocumentsService, private popup: MatDialog, private toastr: ToastrService) { }

  addObject: Document;
  formData: FormData
  @ViewChild('documentAddForm') form: NgForm;

  ngOnInit(): void {
  }


  //function for get file in on change event exist in form once upload file form pc
  uploadDocument(event){

    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    this.formData = new FormData();
    this.formData.append('file', file);

  }

  //function for add file in data base with uploaded file and folder name exist after submit form
  AddDocument(addObject: Document){
    this.documentService.uploadDocument(addObject.folder,this.formData).subscribe((res)=>{
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
