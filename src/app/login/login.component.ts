import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Login } from '../shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private User: UsersService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {

  }

  loginObject: Login = {email: '', password: ''};

  //send login object then if data ok set session storage with user role and redirect to home interface
  //if data not ok display the error

  onLogin(){
    this.User.loginUser(this.loginObject).subscribe(
      (data)=> {
        sessionStorage.setItem("message",data.message);
        sessionStorage.setItem("email",data.email);
        sessionStorage.setItem("role",data.role);
        if(data.message==="connexion réussie"){
          this.router.navigate(['home']);
        }
      },
      (error: any) => this.toastr.error(error.message)
    )
  }








}
