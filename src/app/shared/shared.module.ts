import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NzListModule,
    NzButtonModule,
    NzLayoutModule,
    NzSpinModule,
  ],
  exports: [
    LoaderComponent,
    NzListModule,
    NzButtonModule,
    NzLayoutModule,
    NzSpinModule,
  ],
})
export class SharedModule {}
