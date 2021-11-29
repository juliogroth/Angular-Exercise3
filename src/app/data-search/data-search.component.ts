import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.css']
})
export class DataSearchComponent implements OnInit {
  
  public result: any;
  urlToJson = 'assets/transactions.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
      //console.log("ID é: "+response[0].id)
    });
  }

  title = 'angular-json-file';

  // Configuração da ordenação
  
  key: string = 'date'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key:any) {
    console.log("ordenação é: "+this.key);
      this.key = key;
      this.reverse = !this.reverse;
  }
  
}
