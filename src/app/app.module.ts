import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

import { DataSearchComponent } from './data-search/data-search.component';
import { HttpClientModule } from '@angular/common/http'; //para buscar dos dados json

import { OrderModule } from 'ngx-order-pipe';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component'; //para fazer a ordenação da tabela



@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    DataSearchComponent,
    TransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
