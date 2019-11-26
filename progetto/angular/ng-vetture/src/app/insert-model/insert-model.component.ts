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
  websiteCtrl = false;

  messaggio: string;
  messaggioCtrl = false;

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
      website: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i)
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
      case 'website':
        this.websiteCtrl = ctrl;
    }
  }

  onSubmit(content: any) {
    this.modelSvc.insertModel(this.modelFG.value)
      .subscribe((response: any) => {
        const updateResult: UpdateResult = response;
        this.messaggio = (updateResult.esito.modello.inserisci ? 'Added brand data!' : 'Error! Brand data not added!');
        this.messaggioCtrl = false;
        this.openModal(content);
      }, (error: any) => {
        this.messaggio = 'HTTP error!<br><br>' + error.message;
        this.messaggioCtrl = true;
        this.openModal(content);
      });
  }

  openModal(content: any) {
    this.modalSvc.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
      .then(() => this.modelFG.reset());
  }

}
