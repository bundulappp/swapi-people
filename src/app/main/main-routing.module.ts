import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: '', component: PeopleListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
