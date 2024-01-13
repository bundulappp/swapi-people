import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PeopleDataResponseModel } from 'src/app/shared/models/PeopleDataResponseModel';
import { PeopleResponseViewModel } from 'src/app/shared/models/PeopleResponseViewModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getPeople(pageIndex: number): Observable<PeopleResponseViewModel[]> {
    return this.http
      .get<PeopleDataResponseModel>(
        `${environment.apiUrl}/people/?page=${pageIndex}`
      )
      .pipe(
        map((response: PeopleDataResponseModel) =>
          response.results.map((people: PeopleResponseViewModel) => ({
            name: people.name,
            height: people.height,
            mass: people.mass,
            birth_year: people.birth_year,
            films: people.films,
            planet: people.planet,
          }))
        )
      );
  }
}
