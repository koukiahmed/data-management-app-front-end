import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr'
import { User } from '../shared/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private user: UsersService, private toastr: ToastrService) {}

  registerObject: User = {name: '', email: '', password: '', role: 'user'};


  //send user object with default role user then if data register in backend display message from backend
  //if there is error display message
  onRegister(){
    this.user.addUser(this.registerObject)
    .subscribe(
      (data)=> this.toastr.success(data.message),
      (error: any) => this.toastr.error(error.message)
    )
  }

}
