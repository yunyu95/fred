import { Component, OnInit } from '@angular/core';
import { ModelDataService } from '../model/model-data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateResult } from '../model/update-result';


@Component({
  selector: 'app-insert-model',
  templateUrl: './insert-model.component.html',
  styleUrls: ['./insert-model.component.scss']
})
export class InsertModelComponent implements OnInit {
  modelFG: FormGroup;

  nomeCtrl = false;
  cilindrataCtrl = false;
  potenzaCtrl = false;

  messaggio: string;
  messaggioCtrl = false;

  brands = ['Abarth', 'Alfa Romeo', 'Alfred', 'Aston Martin', 'Audi', 'BMW', 'Bugatti', 'Ferrari', 'FIAT', 'Lamborghini', 'Maserati', 'Mercedes-Benz', 'Opel', 'Porsche'];

  constructor(private fb: FormBuilder, private modelSvc: ModelDataService, private modalSvc: NgbModal) { }

  ngOnInit() {
    this.modelFG = this.fb.group({
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
          Validators.pattern(/^[0-9]{3}$/)
        ])
      ]
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