import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, NzListModule, NzButtonModule, NzLayoutModule],
  exports: [LoaderComponent, NzListModule, NzButtonModule, NzLayoutModule],
})
export class SharedModule {}
