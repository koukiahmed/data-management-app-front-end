import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DocumentsService } from 'src/app/services/documents.service';
import { Document } from 'src/app/shared/document';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { DocumentCrudComponent } from '../document-crud/document-crud.component';

@Component({
  selector: 'app-document-admin',
  templateUrl: './document-admin.component.html',
  styleUrls: ['./document-admin.component.scss']
})
export class DocumentAdminComponent implements OnInit {

  constructor(private documentService: DocumentsService, private toastr: ToastrService, private popup: MatDialog) { }

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

  openPopup(id: any){
    const _popup = this.popup.open(DocumentCrudComponent,{
      width: '500px',
      data:{
        id:id
      }
    });
    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });
  }

  EditDocument(id: any) {
    this.openPopup(id);
  }

  RemoveDocument(id: number){
    alertify.confirm("Remove Document", "do you want remove this Document ?", () =>{
      this.documentService.deleteDocument(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

      })
    }

}
