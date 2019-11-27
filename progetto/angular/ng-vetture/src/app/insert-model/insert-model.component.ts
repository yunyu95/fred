import { Component, OnInit, Input } from '@angular/core';
import { ModelDataService } from '../model/model-data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateResult } from '../model/update-result';
import { Marca } from '../model/brand';
import { QueryResult } from '../model/query-result';
import { BrandDataService } from '../model/brand-data.service';


@Component({
  selector: 'app-insert-model',
  templateUrl: './insert-model.component.html',
  styleUrls: ['./insert-model.component.scss']
})

export class InsertModelComponent implements OnInit {
  @Input() aux: string;
  modelFG: FormGroup;

  nomeCtrl = false;
  cilindrataCtrl = false;
  potenzaCtrl = false;
  id_marca: number;

  messaggio: string;
  messaggioCtrl = false;

  listaMarche: Array<Marca>;

  constructor(private fm: FormBuilder, private modelSvc: ModelDataService, private brandSvc: BrandDataService, private modalSvc: NgbModal) {

  }


  ngOnInit() {
    this.modelFG = this.fm.group({
      nome: [
        '',
        Validators.required
      ],
      cilindrata: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{4}$/)
        ])
      ],
      potenza: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{2,3}$/)
        ])
      ],
      idMarca: ['marca']
    });



    this.brandSvc.getAllBrands()
      .subscribe((response: any) => {
        const queryResult: QueryResult = response;
        this.listaMarche = queryResult.esito.marca;
      }, (error: any) => {
        setTimeout(() => {
          this.messaggio = 'No brands found!<br><br>HTTP error!<br><br>' + error.message;
        }, 7000);
      });
  }

  check(element: string) {
    const ctrl = (this.modelFG.get(element).touched || this.modelFG.get(element).dirty) && this.modelFG.get(element).invalid;
    switch (element) {
      case 'nome':
        this.nomeCtrl = ctrl;
        break;
      case 'cilindrata':
        this.cilindrataCtrl = ctrl;
        break;
      case 'potenza':
        this.potenzaCtrl = ctrl;
    }
  }

  onSubmit(content: any) {
    console.log("id", this.modelFG.value);
    this.modelSvc.insertModel(this.modelFG.value)
      .subscribe((response: any) => {
        const updateResult: UpdateResult = response;
        this.messaggio = (updateResult.esito.modello.inserisci ? 'Added model data!' : 'Error! Model data not added!');
        this.messaggioCtrl = false;
        this.openModal(content);
      }, (error: any) => {
        this.messaggio = 'HTTP error!<br><br>' + error.message;
        this.messaggioCtrl = true;
        this.openModal(content);
      });
  }

  openModal(content: any) {
    this.modalSvc.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then(() => this.modelFG.reset());
  }

}