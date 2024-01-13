import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleDataResponseModel } from 'src/app/shared/models/PeopleDataResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getPeople(pageIndex: number): Observable<PeopleDataResponseModel> {
    return this.http.get<PeopleDataResponseModel>(
      `${environment.apiUrl}/people/?page=${pageIndex}`
    );
  }
}
