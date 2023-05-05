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
  newArray:User[];
  sortedUsers:User[];
  dataSource:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableColumns: string[] = ['Id', 'Name', 'Email', 'Role','Actions'];

  ngOnInit(): void {
    this.getAll();
  }

  //function for get all users with sorted data
  getAll(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
      this.sortedUsers = this.sortedUsersLatest(this.users);
      this.dataSource = new MatTableDataSource(this.sortedUsers);
      this.dataSource.paginator = this.paginator;
    })
  }

  //function for sort data
  sortedUsersLatest(users: User[]): User[]{
    this.newArray = users.sort((a,b)=> b.id - a.id);
    return this.newArray;
  }

  //function for add filter to table
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }


  //function for open curd component and after close get data again
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

  //function for passe selected id to open modify popup
  EditUser(id: any) {
    this.openPopup(id);
  }

  //function for delete selected data
  RemoveUser(id: number){
    alertify.confirm("Supprimer l'utilisateur", "voulez-vous supprimer cet utilisateur ?", () =>{
      this.userService.deleteUser(id).subscribe((res=>{
        this.toastr.success(res.message);
        this.getAll();
      }));
    }, function() {

    })
  }

}
