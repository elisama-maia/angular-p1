import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ElisamaComponentComponent } from './elisama-component/elisama-component.component';
import { ElisamaListaComponentComponent } from './elisama-lista-component/elisama-lista-component.component';
import { ElisamaDisciplinasServiceService } from './elisama-disciplinas-service.service';
import { ElisamaDetalhesComponentComponent } from './elisama-detalhes-component/elisama-detalhes-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'elisama', component: ElisamaComponentComponent },
      { path: 'disciplinas', component: ElisamaListaComponentComponent },
      {
        path: 'detalhes',
        component: ElisamaDetalhesComponentComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ElisamaComponentComponent,
    ElisamaListaComponentComponent,
    ElisamaDetalhesComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ElisamaDisciplinasServiceService],
})
export class AppModule {}
