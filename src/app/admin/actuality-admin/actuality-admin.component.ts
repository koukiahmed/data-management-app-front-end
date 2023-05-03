import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActualitiesService } from 'src/app/services/actualities.service';
import { Actuality } from 'src/app/shared/actuality';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-actuality-admin',
  templateUrl: './actuality-admin.component.html',
  styleUrls: ['./actuality-admin.component.scss']
})
export class ActualityAdminComponent implements OnInit {

  constructor(private actualityService: ActualitiesService, private toastr: ToastrService) { }

  actualities: Actuality[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'Link', 'Date','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.actualityService.getAllActualities().subscribe((data)=>{
      this.actualities = data;

      this.dataSource = new MatTableDataSource(this.actualities);
      this.dataSource.paginator = this.paginator;
    })

  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

}
