import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserInterface } from 'src/app/entities';
import { map } from 'rxjs/internal/operators/map';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private usersSubscription: Subscription;
  displayedColumns = ['first_name', 'last_name', 'email', 'avatar'];
  userList: any[] = [];
  pagesCount: number;
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.users)
    )
      .subscribe((users: UserInterface[]) => {
        this.userList = users['data'];
      });
    this.activatedRoute.data.pipe(
      map(data => data.paginationInfo)
    )
      .subscribe(paginationInfo => {
        this.pagesCount = paginationInfo.total;
      });
  }

  pageChanged(event: PageEvent): void {
    this.spinner.show();
    let page: number = event.pageIndex + 1;
    this.page = page;
    this.router.navigate(['./'], { queryParams: { page } });
    setTimeout(() => {
      // spinner ends after 0.5 second 
      this.spinner.hide();
    }, 500);
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }

  ngOnDestroy() {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

}
