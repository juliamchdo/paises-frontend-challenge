import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../shared/pais.service';
import { Pais } from '../shared/pais.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paises-new',
  templateUrl: './paises-new.component.html',
  styleUrls: ['./paises-new.component.css'],
})
export class PaisesNewComponent implements OnInit {
  public formPais: FormGroup;

  @Output() newPais:EventEmitter<Pais> = new EventEmitter();

  constructor(private fb: FormBuilder, private paisService: PaisService, private toastr:ToastrService) {
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

  public saveNewPais():void{
    const newPais:Pais = this.formPais.value as Pais;

    this.paisService.saveNew(newPais).subscribe(
      resp => {
        this.toastr.success("Novo país salvo com sucesso!");
        this.formPais.reset();
        this.newPais.emit(resp);
      },
      err => {
        this.toastr.error("Falha ao salvar novo país.");
        console.log(err)
      }
    )
  }
}
