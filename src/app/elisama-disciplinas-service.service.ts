import { Injectable } from '@angular/core';

interface Disciplina {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}

@Injectable()
export class ElisamaDisciplinasServiceService {
  list: Array<Disciplina> = [
    {
      codigo: 'ITE-004',
      nome: 'Tópicos Especiais em Sistemas para Internet II',
      diaDaSemana: 'Sexta',
      horario: '19:00',
      ementa: 'Recursos e aplicações da tecnologia escolhida.'
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(
    codigo: string,
    nome: string,
    diaDaSemana: string,
    horario: string,
    ementa: string
  ) {
    this.list.push({ codigo, nome, diaDaSemana, horario, ementa });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
