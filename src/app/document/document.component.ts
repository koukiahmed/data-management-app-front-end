import { Document } from './../shared/document';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentsService } from '../services/documents.service';
import { FoldersService } from '../services/folders.service';
import { map } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(private documentService: DocumentsService,private folderService: FoldersService, @Inject(MAT_DIALOG_DATA) public folderTitle: string) { }
  private apiUrl = 'http://localhost:8080/api';

  docs: Document[];
  dataSource:any;

  ngOnInit(): void {
    this.getDocs();
  }

  tableColumns: string[] = ['Title', 'Source'];

  //function for get all documents in database then filter documents that have that folder title then display
  //documents in popup
  getDocs(){
    this.documentService.getAllDocuments()
    .pipe(map(docs => docs.filter(doc => doc.folder === this.folderTitle)))
    .subscribe((data)=>{
      this.docs = data;
      this.dataSource = new MatTableDataSource(this.docs);
    })
  }

  //function that download the specific documents with id when click on button
  downloadDocument(id: number){
      let a = document.createElement('a');
      a.href = `${this.apiUrl}/documents/download/${id}`;
      a.click();
    }
}
