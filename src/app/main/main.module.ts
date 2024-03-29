import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ListItemComponent } from './people-list/list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './people-list/search-bar/search-bar.component';

@NgModule({
  declarations: [MainComponent, PeopleListComponent, ListItemComponent, SearchBarComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
