import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { LinksService } from 'src/app/services/links.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Link } from 'src/app/shared/link';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-links-crud',
  templateUrl: './links-crud.component.html',
  styleUrls: ['./links-crud.component.scss']
})
export class LinksCrudComponent implements OnInit {

  constructor(private linkService: LinksService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  editObject: Link;
  @ViewChild('linkForm') form: NgForm;
  editMode: boolean = false;

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.linkService.getOneLink(this.data.id).subscribe((data)=>{
        this.editObject = data;

        this.form.setValue({
          id: this.editObject.id,
          title: this.editObject.title,
          path: this.editObject.path,
        })
      })
      this.editMode=true;
    }
  }

  saveLink(linkObject: Link){
    if(!this.editMode){
      this.linkService.addLink(linkObject)
      .subscribe(
        (res)=>{
        this.closePopup();
        this.toastr.success(res.message);
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
    else{
      this.linkService.updateLink(linkObject).subscribe((res)=>{
        this.closePopup();
        this.toastr.success(res.message)
      },
      (error: any) => this.toastr.error(error.message)
      )
    }
  }

  closePopup() {
    this.popup.closeAll();
  }

}
