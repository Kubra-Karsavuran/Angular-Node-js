import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//api için eklendı asadakı
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
// arama yapacagımız search ıcın eklendı asadakı
import { StartFilterPipe } from './start/start-filter.pipe';
// ngmodal kullanabılmemız ıcın ekledık asadakını
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, StartComponent, StartFilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
