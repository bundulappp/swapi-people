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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
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
    NzModalModule,
    NzInputModule,
    FormsModule,
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
    NzModalModule,
    NzInputModule,
    FormsModule,
  ],
})
export class SharedModule {}
