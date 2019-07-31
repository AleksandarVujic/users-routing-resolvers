import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

import { CoreModule } from '../core';
import { UsersListRoutingModule } from './users-list-routing.module';
import { PaginationResolver } from './resolvers/pagination.resolver';

import { UsersResolver } from './resolvers';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
    declarations: [UsersListComponent],
    imports: [
        CommonModule,
        CoreModule.forRoot(),
        UsersListRoutingModule,
        MatPaginatorModule,
        MatTableModule
    ],
    providers: [
        UsersResolver,
        PaginationResolver
    ]
})
export class UsersListModule { }