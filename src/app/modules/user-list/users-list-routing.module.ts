import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { PaginationResolver } from './resolvers/pagination.resolver';
import { UsersResolver } from './resolvers/users.resolver';

import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
    {
        path: '',
        runGuardsAndResolvers: "always",
        resolve: {
            users: UsersResolver,
            paginationInfo: PaginationResolver
        },
        component: UsersListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersListRoutingModule { }