import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  private unSubscriber : Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.disableBrowserClickBack()
  }

  //to disable click back browser if user want to go back and not click logout button for clear session
  //storage that have his role
  disableBrowserClickBack(): void{
    history.pushState(null, '');
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unSubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      this.toastr.info(`Click the button`);
    });
  }

  //if home component destroyed then make the disable function not work
  ngOnDestroy(): void {
    this.unSubscriber.next();
    this.unSubscriber.complete();
  }

}
