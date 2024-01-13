import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, NzListModule, NzButtonModule],
  exports: [LoaderComponent, NzListModule, NzButtonModule],
})
export class SharedModule {}
