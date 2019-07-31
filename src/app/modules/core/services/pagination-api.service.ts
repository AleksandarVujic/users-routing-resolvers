import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

    constructor(private httpClient: HttpClient) { }

    fetchPaginationInfo(): Observable<any> {
        return this.httpClient.get('https://reqres.in/api/users?page=1').pipe(map(response => {
            return {
                page: response['page'],
                per_page: response['per_page'],
                total: response['total'],
                total_pages: response['total_pages']
            }
        }));
    }
}