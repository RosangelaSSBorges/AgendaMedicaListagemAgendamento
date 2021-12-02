import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'agendamento', component: AgendamentoComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, AgendamentoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
