import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FoldersService } from 'src/app/services/folders.service';
import { Folder } from 'src/app/shared/folder';

@Component({
  selector: 'app-folder-admin',
  templateUrl: './folder-admin.component.html',
  styleUrls: ['./folder-admin.component.scss']
})
export class FolderAdminComponent implements OnInit {

  constructor(private folderService: FoldersService, private toastr: ToastrService) { }

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

}
