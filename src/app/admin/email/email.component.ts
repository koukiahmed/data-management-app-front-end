import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/shared/email';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private emailService: EmailService, private userService: UsersService, private toastr: ToastrService) { }

  users: User[];

  emailAdmin = sessionStorage.getItem('email');

  emailObject: Email = {from: this.emailAdmin, to: '', subject: '', body: ''};
  spinner: boolean = true;


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
    })
  }

  sendEmail(){
    this.spinner = false;
    this.emailService.sendEmail(this.emailObject).subscribe((res)=>{
      this.toastr.success(res.message);
      this.spinner = true;
    })
  }
}
