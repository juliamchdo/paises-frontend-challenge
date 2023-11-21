import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paises-new',
  templateUrl: './paises-new.component.html',
  styleUrls: ['./paises-new.component.css'],
})
export class PaisesNewComponent implements OnInit {
  public formPais: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formPais = this.buildFormPais();
  }

  ngOnInit(): void {}

  private buildFormPais(): FormGroup {
    return this.fb.group({
      nome: [null, [Validators.required]],
      sigla: [null, [Validators.required]],
      gentilico: [null, [Validators.required]]
    });
  }

  public isFormControlInvalid(controlName:string):boolean {
    return !!(this.formPais.get(controlName)?.invalid && this.formPais.get(controlName)?.touched)
  }
}
