import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';
import { MainService } from 'src/app/core/services/main.service';
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
    this.mainService.peopleTotalCount$.subscribe(
      (totalCount) => (this.peopleTotalCount = totalCount)
    );
  }
}
