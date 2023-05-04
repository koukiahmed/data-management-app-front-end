import { Component, OnInit, Inject} from '@angular/core';
import { LinksService } from 'src/app/services/links.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Link } from 'src/app/shared/link';

@Component({
  selector: 'app-links-crud',
  templateUrl: './links-crud.component.html',
  styleUrls: ['./links-crud.component.scss']
})
export class LinksCrudComponent implements OnInit {

  constructor(private linkService: LinksService, @Inject(MAT_DIALOG_DATA) public data: any, private popup: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  saveLink(linkObject: Link){

  }

  closePopup() {
    this.popup.closeAll();
  }

}
