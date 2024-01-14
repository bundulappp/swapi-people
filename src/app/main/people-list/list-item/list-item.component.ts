import { Component, Input } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { MainService } from 'src/app/core/services/main.service';
import { PeopleResponseViewModel } from 'src/app/shared/models/PeopleResponseViewModel';
import { PlanetResponseViewModel } from 'src/app/shared/models/PlanetsResponseViewModel';

@Component({
  selector: 'swapi-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() peopleList: PeopleResponseViewModel[] = [];
  isVisible: boolean = false;
  selectedPerson: PeopleResponseViewModel | null = null;
  selectedPersonPlanet: PlanetResponseViewModel | null;
  isLoading$ = this.loaderService.isLoading$;

  constructor(
    private mainService: MainService,
    private loaderService: LoaderService
  ) {}

  showDetails(person: PeopleResponseViewModel): void {
    this.selectedPerson = person;
    this.isVisible = true;
    if (person.homeworld) {
      this.getPlanet(person.homeworld);
    }
  }

  getPlanet(url: string): void {
    this.mainService.getPlanetByUrl(url).subscribe((planet) => {
      this.selectedPersonPlanet = planet;
    });
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
