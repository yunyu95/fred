import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModelDataService } from '../model/model-data.service';
import { QueryResult } from '../model/query-result';
import { BrandDataService } from '../model/brand-data.service';
import { Modello } from '../model/model';


@Component({
  selector: 'app-search-models',
  templateUrl: './search-models.component.html',
  styleUrls: ['./search-models.component.scss'],
  encapsulation: ViewEncapsulation.None,
  moduleId:module.id
})
export class SearchModelsComponent implements OnInit {

  info: FormGroup = this.fm.group({
    nome: ['', Validators.required]
  });
  listaModelli: Array<Modello>;
  modelliTrovati: number;
  marca: string;
  fondazione:number;
  website:string;
  messaggio: string;

  isCollapsed = true;

  constructor(private fm: FormBuilder, private brandSvc: BrandDataService, private modelSvc: ModelDataService) { }

  ngOnInit() {
  }

  onSubmit(toolTip: any) {
    if (this.info.valid) {
      if (toolTip.isOpen()) {
        toolTip.close();
      }
      this.modelSvc.getModelByName(this.info.value.nome)
        .subscribe((response: any) => {
          const queryResult: QueryResult = response;
          this.listaModelli = queryResult.esito.modello;
          this.modelliTrovati = this.listaModelli.length;
          if(this.modelliTrovati !=0){
          this.brandSvc.getBrandById(this.listaModelli[0].idMarca)
            .subscribe((response: any) => {
              const queryResult: QueryResult = response;
              this.marca = queryResult.esito.marca[0].nome;
              this.fondazione = queryResult.esito.marca[0].fondazione;
              this.website = queryResult.esito.marca[0].website;
              this.isCollapsed = false;
            }, (error: any) => {
              this.messaggio = 'HTTP error!<br><br>' + error.message;
              this.isCollapsed = false;
            });
          }
          this.isCollapsed = false;
        }, (error: any) => {
          this.messaggio = 'HTTP error!<br><br>' + error.message;
          this.isCollapsed = false;
        });
    } else {
      if (!toolTip.isOpen()) {
        toolTip.open();
      }
      this.isCollapsed = true;
    }
  }

}