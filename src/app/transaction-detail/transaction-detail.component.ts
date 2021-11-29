import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {


  public resultDetail: any;
  urlToJsonDetail = 'assets/01-00.json'; //caminho deve ser assets + {{variavel clicada}} + .json

  constructor(public http: HttpClient,
    private route: ActivatedRoute,
    private location: Location) 
    { }

  visible: 'Yes' | undefined;

  ngOnInit(): void {
  //  this.getTransaction();
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("retornou o ticket: " + id);
    this.http.get<any>("assets/"+id+".json").subscribe(responseDetail => {
      this.resultDetail = responseDetail;
    });
    this.visible = 'Yes';
  }

  goBack(): void {
    this.location.back();
  }

}
