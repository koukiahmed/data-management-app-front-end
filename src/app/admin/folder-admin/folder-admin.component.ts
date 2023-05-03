import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FoldersService } from 'src/app/services/folders.service';
import { Folder } from 'src/app/shared/folder';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { FolderCrudComponent } from '../folder-crud/folder-crud.component';

@Component({
  selector: 'app-folder-admin',
  templateUrl: './folder-admin.component.html',
  styleUrls: ['./folder-admin.component.scss']
})
export class FolderAdminComponent implements OnInit {

  constructor(private folderService: FoldersService, private toastr: ToastrService, private popup: MatDialog) { }

  folders: Folder[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'User', 'Date', 'Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.folderService.getAllFolders().subscribe((data=>{
      this.folders = data;

      this.dataSource = new MatTableDataSource(this.folders);
      this.dataSource.paginator = this.paginator;
    }))
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  openPopup(id: any){
    const _popup = this.popup.open(FolderCrudComponent,{
      width: '500px',
      data:{
        id:id
      }
    });

    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });
  }

  EditFolder(id: any) {
    this.openPopup(id);
  }

  RemoveFolder(id: number){
    alertify.confirm("Remove Folder", "do you want remove this Folder ?", () =>{
      this.folderService.deleteFolder(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

      })
    }

}
