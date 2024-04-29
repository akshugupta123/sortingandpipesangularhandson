import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { SortPipe } from './SortPipe'; // Import SortPipe

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    SortPipe // Add SortPipe here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
