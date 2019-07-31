import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/modules/core/services';

import { UserInterface } from 'src/app/entities';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: UserInterface;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiService.fetchUserById(userId).subscribe((user: UserInterface) => {
      this.user = user;
    });
  }

  back(): void {
    this.router.navigate(['./users']);
  }

}
