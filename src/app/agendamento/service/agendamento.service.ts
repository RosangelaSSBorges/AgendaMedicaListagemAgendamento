import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AgendamentoService {
  constructor(public http: HttpClient) {}
  baseUrl = 'https://agendaciro.herokuapp.com/agendamentos';

  getAgendamento(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
