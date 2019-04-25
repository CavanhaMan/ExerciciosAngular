import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
/*testfdfdfde*/