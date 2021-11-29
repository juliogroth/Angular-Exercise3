import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataSearchComponent } from './data-search/data-search.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/dataSearch', pathMatch:'full'},
  {path:'dataSearch', component:DataSearchComponent},
  {path:'transactionDetail/:id', component: TransactionDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
