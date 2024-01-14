import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { PeopleResponseViewModel } from '../../shared/models/PeopleResponseViewModel';
import { environment } from '../../../environments/environment';
import { PeopleDataResponseModel } from 'src/app/shared/models/PeopleDataResponseModel';
import { PlanetResponseViewModel } from 'src/app/shared/models/PlanetsResponseViewModel';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private peopleTotalCount = new BehaviorSubject<number>(1);
  peopleTotalCount$ = this.peopleTotalCount.asObservable();

  constructor(private http: HttpClient) {}

  getPeople(pageIndex: number): Observable<PeopleResponseViewModel[]> {
    return this.http
      .get<PeopleDataResponseModel>(
        `${environment.apiUrl}/people/?page=${pageIndex}`
      )
      .pipe(
        tap((response: PeopleDataResponseModel) =>
          this.peopleTotalCount.next(response.count)
        ),
        map((response: PeopleDataResponseModel) =>
          response.results.map((people: PeopleResponseViewModel) => ({
            name: people.name,
            height: people.height,
            mass: people.mass,
            birth_year: people.birth_year,
            films: people.films,
            homeworld: people.homeworld,
          }))
        )
      );
  }
  getPlanetByUrl(url: string): Observable<PlanetResponseViewModel> {
    return this.http.get<any>(url).pipe(
      map((response) => ({
        name: response.name,
        terrain: response.terrain,
        climate: response.climate,
      }))
    );
  }
}
