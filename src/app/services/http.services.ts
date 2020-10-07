import { Injectable } from '@angular/core'; // necessario importar

@Injectable()  //o angular vai conseguir instanciar esse arquivo
export class HttpService {



  private nomes: string[] = ['nome', 'senha', 'data']

  getCadastro() {
    return this.nomes
  }

  pushNomes(nome: string){ // adicionar nome
    this.nomes.push(nome);
  }
}
