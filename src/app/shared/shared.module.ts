import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzImageModule } from 'ng-zorro-antd/image';
@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NzListModule,
    NzButtonModule,
    NzLayoutModule,
    NzSpinModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzImageModule,
  ],
  exports: [
    LoaderComponent,
    NzListModule,
    NzButtonModule,
    NzLayoutModule,
    NzSpinModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzImageModule,
  ],
})
export class SharedModule {}
