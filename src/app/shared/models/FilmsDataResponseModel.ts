import { FilmsResponseViewModel } from './FilmsResponseViewModel';

export interface FilmsDataResponseModel {
  count: number;
  next: string;
  previous: string;
  results: FilmsResponseViewModel[];
}
