import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { UserCrudComponent } from '../user-crud/user-crud.component';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.scss']
})
export class UsersAdminComponent implements OnInit {

  constructor(private userService: UsersService, private toastr: ToastrService, private popup: MatDialog) { }

  users: User[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Name', 'Email', 'Role','Actions'];

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

  openPopup(id: any){
    const _popup = this.popup.open(UserCrudComponent,{
      width: '500px',
      data:{
        id:id
      }
    });

    _popup.afterClosed().subscribe(r => {
      this.getAll();
    });

  }

  EditUser(id: any) {
    this.openPopup(id);
  }

  RemoveUser(id: number){
    alertify.confirm("Remove User", "do you want remove this user ?", () =>{
      this.userService.deleteUser(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

    })
  }

}
