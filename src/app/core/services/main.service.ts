import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { PeopleResponseViewModel } from '../../shared/models/PeopleResponseViewModel';
import { environment } from '../../../environments/environment';
import { PeopleDataResponseModel } from 'src/app/shared/models/PeopleDataResponseModel';
import { PlanetResponseViewModel } from 'src/app/shared/models/PlanetsResponseViewModel';
import { FilmsResponseViewModel } from 'src/app/shared/models/FilmsResponseViewModel';
import { FilmsDataResponseModel } from 'src/app/shared/models/FilmsDataResponseModel';

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
        tap((response) => this.peopleTotalCount.next(response.count)),
        map((response) => this.mapPeopleData(response))
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

  getPersonByName(name: string): Observable<PeopleResponseViewModel[]> {
    return this.http
      .get<PeopleDataResponseModel>(
        `${environment.apiUrl}/people/?search=${name}`
      )
      .pipe(
        tap((response) => this.peopleTotalCount.next(response.count)),
        map((response) => this.mapPeopleData(response))
      );
  }

  getPersonByUrl(url: string): Observable<PeopleResponseViewModel> {
    return this.http.get<PeopleResponseViewModel>(url).pipe(
      map((person) => ({
        name: person.name,
        height: person.height,
        mass: person.mass,
        birth_year: person.birth_year,
        films: person.films,
        homeworld: person.homeworld,
      }))
    );
  }

  getFilmsSummary(): Observable<FilmsResponseViewModel[]> {
    return this.http
      .get<FilmsDataResponseModel>(`${environment.apiUrl}/films`)
      .pipe(
        map((resposne) =>
          resposne.results.map((films) => ({
            title: films.title,
            url: films.url,
            characters: films.characters,
          }))
        )
      );
  }

  getFilmByUrl(url: string): Observable<FilmsResponseViewModel> {
    return this.http.get<any>(url).pipe(
      map((response) => ({
        title: response.title,
        url: response.url,
        characters: response.characters,
      }))
    );
  }

  private mapPeopleData(
    response: PeopleDataResponseModel
  ): PeopleResponseViewModel[] {
    return response.results.map((people) => ({
      name: people.name,
      height: people.height,
      mass: people.mass,
      birth_year: people.birth_year,
      films: people.films,
      homeworld: people.homeworld,
    }));
  }
}
