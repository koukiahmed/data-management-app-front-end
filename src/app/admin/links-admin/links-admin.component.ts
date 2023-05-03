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
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'Path', 'Date','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.linkService.getAllLinks().subscribe((data)=>{
      this.links = data;

      this.dataSource = new MatTableDataSource(this.links);
      this.dataSource.paginator = this.paginator;
    })

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
    alertify.confirm("Remove Link", "do you want remove this Link ?", () =>{
      this.linkService.deleteLink(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

    })
  }

}
