import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service';
import { Link } from '../shared/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private linkService: LinksService) { }

  links: Link[];


  //function for get all links in database
  ngOnInit(): void {
    this.linkService.getAllLinks().subscribe((data)=>{
      this.links = data;
    })
  }
}
