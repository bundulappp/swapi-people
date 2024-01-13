import { PeopleResponseViewModel } from './PeopleResponseViewModel';

export interface PeopleDataResponseModel {
  count: number;
  next: string;
  previous: string;
  results: PeopleResponseViewModel[];
}
