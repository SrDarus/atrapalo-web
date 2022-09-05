import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { PagesModule } from './modules/pages/pages.module';
import { RootModule } from './modules/root/root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from './interceptor/base.interceptor';
import { ReportarModule } from './modules/reportar/reportar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RootModule,
    SharedModule,
    PagesModule,
    ReportarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports:[
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
