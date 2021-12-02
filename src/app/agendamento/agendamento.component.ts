import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from './service/agendamento.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
  providers: [AgendamentoService],
})
export class AgendamentoComponent implements OnInit {
  dataSource: Array<any> = [];

  constructor(public agendaService: AgendamentoService) {}
  listar(): void {
    this.agendaService.getAgendamento().subscribe((data: any[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  ngOnInit() {
    this.listar();
    console.log(this.dataSource);
  }
}
