import { HttpService } from './../../services/http.services';
import { CadastroService } from './../../services/cadastro.service';
import { Register } from './cadastro.model';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nomes: string[] = [];
  // httpService: HttpService;

  cadastro: any = {
    nome: '',
    senha: '',
    cep: '',
    endereco: '',
    numero: '',
    cidade: '',
    estado: '',
    telefone: '',
  };

  onSubmit(form){
    console.log(form.value);
    console.log(this.cadastro);
  }

  constructor( private httpService: HttpService) {
    // this.httpService = _httpService;
  }

  ngOnInit(): void {
    this.nomes = this.httpService.getCadastro();
  }

  onAddNome(nome:string){
    this.httpService.pushNomes(nome)
  }
onaddNome(nome:string){
  this.httpService.push(nome)
}
}
