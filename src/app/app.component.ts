import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent2 {
  nomes: string[] = ['joão','maria','josé','pedro','felipe','carlos'];
  busca(valor:string){
    alert(valor)
  }

  nomesFiltro:string[];
  buscar(valor:string){
    this.nomesFiltro=[];
    //método 1
    for(var i=0 ; i<this.nomes.length ; i++)
      if(this.nomes[i].toLowerCase().includes(valor.toLowerCase()))
        this.nomesFiltro.push(this.nomes[i]);
  }

  nomesFiltro2:string[];
  buscar2(valor:string){
    this.nomesFiltro2=[];
    //método 2
    let temp = [];
    this.nomes.forEach(buscarItem);
    function buscarItem(nome){
      if(nome.toLowerCase().includes(valor.toLowerCase()))
        temp.push(nome);
    }
  }

  nomesFiltro3:string[];
  buscar3(valor:string){
    this.nomesFiltro3=[];
    //método 1
    for(var i=0 ; i<this.nomes.length ; i++){
      if(this.nomes[i].toLowerCase().includes(valor.toLowerCase()))
        this.nomesFiltro3.push(this.nomes[i]);
    }
  }
}
/* Exemplo 12 - Pagina 35 - Manipulando lista com observables */
export class AppComponent implements OnInit {
  observable: Observable<string>;
  nomes: Array<string> = [];
  ngOnInit() {
    this.observable = new Observable(Subscriber => {
      setInterval(() => {
        Subscriber.next(this.makeid(5));
      },10000);
    }
  }
}