import { Component, OnInit, ViewChild } from '@angular/core';
import { ActualitiesService } from '../services/actualities.service';
import { Actuality } from '../shared/actuality';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ActualityBodyComponent } from '../actuality-body/actuality-body.component';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.scss']
})
export class ActualityComponent implements OnInit {

  constructor(private actuality: ActualitiesService, private body: MatDialog) { }

  actualities:Actuality[];
  newArray:Actuality[];
  sortedActualities:Actuality[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.actuality.getAllActualities().subscribe(data => {
      this.actualities=data;
      this.sortedActualities = this.sortedActualitiesByDate(this.actualities);
      this.dataSource = new MatTableDataSource(this.sortedActualities);
      this.dataSource.paginator = this.paginator;
    })
  }

  tableColumns: string[] = ['Title', 'Info', 'Date'];

  //function for sorting actualities by id for show to user last actuality added
  sortedActualitiesByDate(actualities: Actuality[]): Actuality[]{
    this.newArray = actualities.sort((a,b)=> b.id - a.id);
    return this.newArray;
  }

  //when click in info button open popup for display actuality info to user
  openBody(id: number){
    this.body.open(ActualityBodyComponent,{
      width:'50%',
      height:'50%',
      data:id
    })
  }



}
