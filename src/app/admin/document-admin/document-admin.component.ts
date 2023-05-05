import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DocumentsService } from 'src/app/services/documents.service';
import { Document } from 'src/app/shared/document';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { DocumentAddComponent } from '../document-add/document-add.component';
import { DocumentUpdateComponent } from '../document-update/document-update.component';


@Component({
  selector: 'app-document-admin',
  templateUrl: './document-admin.component.html',
  styleUrls: ['./document-admin.component.scss']
})
export class DocumentAdminComponent implements OnInit {

  constructor(private documentService: DocumentsService, private toastr: ToastrService, private popup: MatDialog) { }

  documents: Document[];
  newArray:Document[];
  sortedDocuments:Document[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'Folder', 'Date','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.documentService.getAllDocuments().subscribe((data)=>{
      this.documents = data;
      this.sortedDocuments = this.sortedDocumentsLatest(this.documents);
      this.dataSource = new MatTableDataSource(this.sortedDocuments);
      this.dataSource.paginator = this.paginator;
    })
  }

  sortedDocumentsLatest(documents: Document[]): Document[]{
    this.newArray = documents.sort((a,b)=> b.id - a.id);
    return this.newArray;
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  //function for open add popup component after close popup get all data again
  openAddPopup(){
    const _popup = this.popup.open(DocumentAddComponent,{
      width: '500px',
    });
    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });
  }

  //function for open modify popup component after close popup get all data again
  openUpdatePopup(id: any){
    const _popup = this.popup.open(DocumentUpdateComponent,{
      width: '500px',
      data:{
        id:id
      }
    });
    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });
  }

  RemoveDocument(id: number){
    alertify.confirm("Supprimer le document", "voulez-vous supprimer ce document ?", () =>{
      this.documentService.deleteDocument(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

      })
    }

}
