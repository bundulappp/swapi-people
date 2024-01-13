import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { PeopleResponseViewModel } from 'src/app/shared/models/PeopleResponseViewModel';

@Component({
  selector: 'swapi-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() peopleList: PeopleResponseViewModel[] = [];
  isVisible: boolean = false;
  selectedPerson: PeopleResponseViewModel | null = null;

  constructor(private mainService: MainService) {}

  showModal(person: PeopleResponseViewModel): void {
    this.selectedPerson = person;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
