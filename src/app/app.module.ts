import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageTabComponent } from './page-tab/page-tab.component';
import { TableOfContentPageComponent } from './table-of-content-page/table-of-content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageTabComponent,
    TableOfContentPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
