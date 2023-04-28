import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  //if user click logout then redirect to login interface and delete session storage that have his role

  ngOnInit(): void {
    this.router.navigate(['login'])
    sessionStorage.clear();
  }

}
