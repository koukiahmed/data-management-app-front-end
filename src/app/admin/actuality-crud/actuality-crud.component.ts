import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActualitiesService } from 'src/app/services/actualities.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Actuality } from 'src/app/shared/actuality';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actuality-crud',
  templateUrl: './actuality-crud.component.html',
  styleUrls: ['./actuality-crud.component.scss']
})
export class ActualityCrudComponent implements OnInit {

  constructor(private actualityService: ActualitiesService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  editObject: Actuality;
  @ViewChild('actualityForm') form: NgForm;
  editMode: boolean = false;

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.actualityService.getOneActuality(this.data.id).subscribe((data)=>{
        this.editObject = data;

        this.form.setValue({
          id: this.editObject.id,
          title: this.editObject.title,
          link: this.editObject.link,
          body: this.editObject.body,
        })
      })
      this.editMode=true;
    }
  }

  saveActuality(actualityObject: Actuality){
    if(!this.editMode){
      this.actualityService.addActuality(actualityObject)
      .subscribe(
        (res)=>{
        this.closePopup();
        this.toastr.success(res.message);
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
    else{
      this.actualityService.updateActuality(actualityObject).subscribe((res)=>{
        this.closePopup();
        this.toastr.success(res.message)
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
  }

  closePopup() {
    this.popup.closeAll();
  }

}
