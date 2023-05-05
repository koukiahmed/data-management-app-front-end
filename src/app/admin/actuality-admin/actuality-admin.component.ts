import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActualitiesService } from 'src/app/services/actualities.service';
import { Actuality } from 'src/app/shared/actuality';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { ActualityCrudComponent } from '../actuality-crud/actuality-crud.component';

@Component({
  selector: 'app-actuality-admin',
  templateUrl: './actuality-admin.component.html',
  styleUrls: ['./actuality-admin.component.scss']
})
export class ActualityAdminComponent implements OnInit {

  constructor(private actualityService: ActualitiesService, private toastr: ToastrService, private popup: MatDialog) { }

  actualities: Actuality[];
  newArray:Actuality[];
  sortedActualities:Actuality[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Title', 'Link', 'Date','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.actualityService.getAllActualities().subscribe((data)=>{
      this.actualities = data;
      this.sortedActualities = this.sortedActualitiesLatest(this.actualities);
      this.dataSource = new MatTableDataSource(this.actualities);
      this.dataSource.paginator = this.paginator;
    })
  }

  sortedActualitiesLatest(actualities: Actuality[]): Actuality[]{
    this.newArray = actualities.sort((a,b)=> b.id - a.id);
    return this.newArray;
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  openPopup(id: any){
    const _popup = this.popup.open(ActualityCrudComponent,{
      width: '500px',
      data:{
        id:id
      }
    });
    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });
  }

  EditActuality(id: any) {
    this.openPopup(id);
  }

  RemoveActuality(id: number){
    alertify.confirm("Supprimer l'actualité", "voulez-vous supprimer cette actualité ?", () =>{
      this.actualityService.deleteActuality(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

      })
    }

}
