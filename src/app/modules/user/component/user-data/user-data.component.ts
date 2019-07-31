import { Component, OnInit, Input, Optional } from '@angular/core';

import { UserComponent } from '../user/user.component';
import { UserInterface } from 'src/app/entities';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input() user: UserInterface;

  constructor(@Optional() private parent: UserComponent) { }

  ngOnInit() {
    this.parent.user = { ...this.user };
  }

}
