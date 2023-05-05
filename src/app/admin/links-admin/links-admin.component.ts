import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LinksService } from 'src/app/services/links.service';
import { Link } from 'src/app/shared/link';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { LinksCrudComponent } from '../links-crud/links-crud.component';

@Component({
  selector: 'app-links-admin',
  templateUrl: './links-admin.component.html',
  styleUrls: ['./links-admin.component.scss']
})
export class LinksAdminComponent implements OnInit {

  constructor(private linkService: LinksService, private toastr: ToastrService, private popup: MatDialog) { }

  links: Link[];
  newArray:Link[];
  sortedLinks:Link[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'Path', 'Date','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.linkService.getAllLinks().subscribe((data)=>{
      this.links = data;
      this.sortedLinks = this.sortedLinkLatest(this.links);
      this.dataSource = new MatTableDataSource(this.sortedLinks);
      this.dataSource.paginator = this.paginator;
    })
  }

  sortedLinkLatest(links: Link[]): Link[]{
    this.newArray = links.sort((a,b)=> b.id - a.id);
    return this.newArray;
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  openPopup(id: any){
    const _popup = this.popup.open(LinksCrudComponent,{
      width: '500px',
      data:{
        id:id
      }
    });

    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });
  }

  EditLink(id: any) {
    this.openPopup(id);
  }

  RemoveLink(id: number){
    alertify.confirm("Supprimer le lien", "voulez-vous supprimer ce lien ?", () =>{
      this.linkService.deleteLink(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

    })
  }

}
