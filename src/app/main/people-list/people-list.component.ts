import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';
import { MainService } from 'src/app/core/services/main.service';
import { FilmsResponseViewModel } from 'src/app/shared/models/FilmsResponseViewModel';
import { PeopleResponseViewModel } from 'src/app/shared/models/PeopleResponseViewModel';

@Component({
  selector: 'swapi-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  peopleList: PeopleResponseViewModel[] = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  peopleTotalCount: number = 10;
  // filmList: FilmsResponseViewModel[] = [];

  constructor(
    private mainService: MainService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.mainService.getPeople(this.pageIndex).subscribe((peopleList) => {
      this.peopleList = peopleList;
    });

    this.mainService.peopleTotalCount$.subscribe(
      (totalCount) => (this.peopleTotalCount = totalCount)
    );
  }

  onPageChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.mainService.getPeople(this.pageIndex).subscribe((peopleList) => {
      this.peopleList = peopleList;
    });
  }

  handleSearch(results: PeopleResponseViewModel[]): void {
    this.peopleList = results;
    this.peopleTotalCount = results.length;
  }

  handleFilmCharactersSelected(characterUrls: string[]): void {
    this.peopleList = [];

    characterUrls.forEach((url) => {
      this.mainService.getPersonByUrl(url).subscribe((person) => {
        this.peopleList.push(person);
        this.peopleTotalCount = this.peopleList.length;
      });
    });
  }
}
