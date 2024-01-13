import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  isLoading$: Observable<boolean> = this.isLoading.asObservable();
  constructor() {}

  show(): void {
    this.isLoading.next(true);
  }

  hide(): void {
    this.isLoading.next(false);
  }
}
