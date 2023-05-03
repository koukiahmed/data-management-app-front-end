import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {

  constructor(private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  closePopup() {
    this.popup.closeAll();
  }


}
