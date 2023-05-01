import { ActualitiesService } from '../services/actualities.service';
import { Actuality } from './../shared/actuality';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-actuality-body',
  templateUrl: './actuality-body.component.html',
  styleUrls: ['./actuality-body.component.scss']
})
export class ActualityBodyComponent implements OnInit {

  constructor(private actualityService: ActualitiesService, @Inject(MAT_DIALOG_DATA) public data: number) { }

  actuality: Actuality;
  body:string;
  link:string


  //get actuality then display body and link in popup
  ngOnInit(): void {
    this.actualityService.getOneActuality(this.data).subscribe((result)=>{
      this.actuality=result;
      this.body=this.actuality.body;
      this.link=this.actuality.link;
    }
    )
  }

}
