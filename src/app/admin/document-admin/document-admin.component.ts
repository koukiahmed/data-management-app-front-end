import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DocumentsService } from 'src/app/services/documents.service';
import { Document } from 'src/app/shared/document';

@Component({
  selector: 'app-document-admin',
  templateUrl: './document-admin.component.html',
  styleUrls: ['./document-admin.component.scss']
})
export class DocumentAdminComponent implements OnInit {

  constructor(private documentService: DocumentsService, private toastr: ToastrService) { }

  documents: Document[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'Folder', 'Date','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.documentService.getAllDocuments().subscribe((data)=>{
      this.documents = data;

      this.dataSource = new MatTableDataSource(this.documents);
      this.dataSource.paginator = this.paginator;
    })
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

}
