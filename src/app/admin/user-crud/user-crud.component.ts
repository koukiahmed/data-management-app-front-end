import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {

  constructor(private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  editObject: User;
  @ViewChild('userForm') form: NgForm; //for get form html data
  editMode: boolean = false;

  //function for get selected data with id then add data to form popup auto
  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.userService.getOneUser(this.data.id).subscribe((data)=>{
        this.editObject = data;

        this.form.setValue({
          id: this.editObject.id,
          name: this.editObject.name,
          email: this.editObject.email,
          password: this.editObject.password,
          role: this.editObject.role
        })
      })
      this.editMode=true;
    }
  }

  //fucntion for save data to table if edit mode false then add if edit mode is true then update it
  saveUser(userObject: User){
    if(!this.editMode){
      this.userService.addUser(userObject)
      .subscribe(
        (res)=>{
        this.closePopup();
        this.toastr.success(res.message);
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
    else{
      this.userService.updateUser(userObject).subscribe((res)=>{
        this.closePopup();
        this.toastr.success(res.message)
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
  }

  //fucntion for close popup
  closePopup() {
    this.popup.closeAll();
  }

}
