import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/entities';
import { PaginationApiService } from './pagination-api.service';

@Injectable()
export class ApiService {

    constructor(
        private httpClient: HttpClient,
        private paginationApiService: PaginationApiService
    ) { }

    fetchUsers(page): Observable<any> {
        return this.httpClient.get('https://reqres.in/api/users?page=' + page);
    }

    fetchPaginationInfo(): Observable<any> {
        return this.paginationApiService.fetchPaginationInfo();
    }

    fetchUserById(id: number): Observable<UserInterface> {
        return this.httpClient.get<UserInterface>(`https://reqres.in/api/users/${id}`);
    }

}