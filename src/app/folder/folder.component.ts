import { Component, OnInit } from '@angular/core';
import { FoldersService } from '../services/folders.service';
import { Folder } from '../shared/folder';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DocumentComponent } from '../document/document.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  constructor(private folderService: FoldersService, private docs: MatDialog) { }

  folders: Folder[];
  dataSource:any;

  ngOnInit(): void {
    this.folderService.getAllFolders().subscribe((data)=>{
      this.folders= data;
      this.dataSource = new MatTableDataSource(this.folders);
    })
  }

  tableColumns: string[] = ['Title', 'Date', 'User','Documents'];

  //when click on button folder open popup for display his documents that have folder name in data
  openDocuments(folderTitle:string){
    this.docs.open(DocumentComponent,{
      width:'50%',
      height:'50%',
      data:folderTitle
    })

  }

}
