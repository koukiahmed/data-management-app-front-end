import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.scss']
})
export class UsersAdminComponent implements OnInit {

  constructor(private userService: UsersService, private toastr: ToastrService) { }

  users: User[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Name', 'Email', 'Password', 'Role','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;

      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    })
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }


}
