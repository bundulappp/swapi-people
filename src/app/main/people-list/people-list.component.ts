import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
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
  private pageIndex: number = 1;

  constructor(
    private mainService: MainService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.mainService.getPeople(this.pageIndex).subscribe((peopleList) => {
      this.peopleList = peopleList;
    });
  }
}
