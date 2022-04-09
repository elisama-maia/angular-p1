import { Component, OnInit } from '@angular/core';
import { ElisamaDisciplinasServiceService } from '../elisama-disciplinas-service.service';

@Component({
  selector: 'app-elisama-detalhes-component',
  templateUrl: './elisama-detalhes-component.component.html',
  styleUrls: ['./elisama-detalhes-component.component.css']
})
export class ElisamaDetalhesComponentComponent implements OnInit {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
  constructor(public disciplinas: ElisamaDisciplinasServiceService) { }
  
  ngOnInit() {
  }

}