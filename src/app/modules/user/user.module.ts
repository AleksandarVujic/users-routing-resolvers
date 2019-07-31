import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-data.routing.module';

import { UserComponent } from './component/user/user.component';
import { UserDataComponent } from './component/user-data/user-data.component';

@NgModule({
    declarations: [UserComponent, UserDataComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatCardModule,
        MatButtonModule
    ],
})
export class UserModule { }