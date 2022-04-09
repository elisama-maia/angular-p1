import { Component, OnInit } from '@angular/core';
import { ElisamaDisciplinasServiceService } from '../elisama-disciplinas-service.service';

@Component({
  selector: 'app-elisama-lista-component',
  templateUrl: './elisama-lista-component.component.html',
  styleUrls: ['./elisama-lista-component.component.css'],
})
export class ElisamaListaComponentComponent implements OnInit {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
  constructor(public disciplinas: ElisamaDisciplinasServiceService) {
    this.codigo = '';
    this.nome = '';
    this.diaDaSemana = '';
    this.horario = '';
    this.ementa = '';
  }

  ngOnInit() {}
}
