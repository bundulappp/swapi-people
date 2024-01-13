import { PlanetResponseViewModel } from './PlanetsResponseViewModel';

export interface PeopleResponseViewModel {
  name: string;
  imgUrl?: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  planet?: PlanetResponseViewModel;
}
