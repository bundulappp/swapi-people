import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';
import { MainService } from 'src/app/core/services/main.service';
import { FilmsResponseViewModel } from 'src/app/shared/models/FilmsResponseViewModel';
import { PeopleResponseViewModel } from 'src/app/shared/models/PeopleResponseViewModel';

@Component({
  selector: 'swapi-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  private searchQuerySubject = new Subject<string>();
  searchQuery: string = '';
  @Output() searchEvent = new EventEmitter<PeopleResponseViewModel[]>();
  @Input() filmList: FilmsResponseViewModel[];

  constructor(private mainService: MainService) {
    this.searchQuerySubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((query) => this.mainService.getPersonByName(query))
      )
      .subscribe((results) => {
        this.searchEvent.emit(results);
      });
  }

  getPersonByName(query: string) {
    this.mainService
      .getPersonByName(query)
      .subscribe((result) => this.searchEvent.emit(result));
  }

  onSearchQueryChange(query: string) {
    this.searchQuerySubject.next(query);
  }

  onFilmSelect(filmUrl: string) {
    console.log('selected film:', filmUrl);
  }
}
