import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandDataService } from '../model/brand-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Marca } from '../model/brand';
import { Modello } from '../model/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateResult } from '../model/update-result';
import { ModelDataService } from '../model/model-data.service';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.scss']
})
export class UpdateModelComponent implements OnInit {

  @Input() nModello: Modello;
  @Output() conferma = new EventEmitter<boolean>();
  modelloFG: FormGroup;

  nomeCtrl = false;
  cilindrataCtrl = false;
  potenzaCtrl = false;

  messaggio: string;
  messaggioCtrl = false;

  constructor(private fm: FormBuilder, private modelSvc: ModelDataService, private brandSvc: BrandDataService, private modalSvc: NgbModal) { }

  ngOnInit() {
    this.modelloFG = this.fm.group({
      nome: [
        this.nModello.nome,
        Validators.required
      ],
      cilindrata: [
        this.nModello.cilindrata,
        Validators.compose([
          Validators.required, Validators.pattern(/^[0-9]{4}$/)
        ])
      ],
      potenza: [
        this.nModello.potenza,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{3}$/)
        ])
      ]
    });
  }

  check(element: string) {
    const ctrl = (this.modelloFG.get(element).touched || this.modelloFG.get(element).dirty) && this.modelloFG.get(element).invalid;
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
    this.nModello.nome = this.modelloFG.value.nome;
    this.nModello.cilindrata = this.modelloFG.value.cilindrata;
    this.nModello.potenza = this.modelloFG.value.potenza;
    this.modelSvc.updateModel(this.nModello)
      .subscribe((response: any) => {
        const updateResult: UpdateResult = response;
        this.messaggio = (updateResult.esito.modello.aggiorna ? 'Updated model data!' : 'Error! Model data not updated!');
        this.messaggioCtrl = false;
        this.openModal(content);
      }, (error: any) => {
        this.messaggio = 'HTTP error!<br><br>' + error.message;
        this.messaggioCtrl = true;
        this.openModal(content);
      });
  }

  openModal(content: any) {
    this.modalSvc.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'sm'}).result
      .then(() => {
        if (this.messaggio) {
          this.conferma.emit();
        }
      });
  }

}

