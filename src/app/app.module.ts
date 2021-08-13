import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoomsTableComponent } from './main/roomsTable/roomsTable.component';
import { DataService } from './core/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [DataService, HttpClient, MatPaginator],
  bootstrap: [AppComponent]
})

export class AppModule { }
