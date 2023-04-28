import { Document } from './../shared/document';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentsService } from '../services/documents.service';
import { Folder } from '../shared/folder';
import { FoldersService } from '../services/folders.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(private documentService: DocumentsService,private folderService: FoldersService, @Inject(MAT_DIALOG_DATA) public folderTitle: string) { }

  docs: Document[];

  ngOnInit(): void {
    this.getDocs();
  }
  getDocs(){
    this.documentService.getAllDocuments()
    .pipe(map(docs => docs.filter(doc => doc.folder === this.folderTitle)))
    .subscribe((data)=>{
      this.docs = data;
    })
  }

  getDocument(id: number){
      let a = document.createElement('a');
      a.href = `http://localhost:8080/api/documents/download/${id}`;
      a.click();
    }
}
