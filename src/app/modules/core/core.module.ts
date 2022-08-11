import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

const coreModules = [
  FlexLayoutModule,
  HttpClientModule
]

@NgModule({
  imports: [
    ...coreModules,
  ],
  exports: [
    ...coreModules,
  ]
})
export class CoreModule { }
