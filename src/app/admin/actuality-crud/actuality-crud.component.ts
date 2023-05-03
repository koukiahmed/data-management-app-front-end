import { Component, OnInit, Inject } from '@angular/core';
import { ActualitiesService } from 'src/app/services/actualities.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actuality-crud',
  templateUrl: './actuality-crud.component.html',
  styleUrls: ['./actuality-crud.component.scss']
})
export class ActualityCrudComponent implements OnInit {

  constructor(private actualityService: ActualitiesService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closePopup() {
    this.popup.closeAll();
  }

}
