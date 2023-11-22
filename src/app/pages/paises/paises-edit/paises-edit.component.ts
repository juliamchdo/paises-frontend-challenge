import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../shared/pais.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from '../shared/pais.model';

@Component({
  selector: 'app-paises-edit',
  templateUrl: './paises-edit.component.html',
  styleUrls: ['./paises-edit.component.css'],
})
export class PaisesEditComponent implements OnInit {
  public formPais: FormGroup;

  //ActivatedRoute permite acessar dados da url
  constructor(
    private fb: FormBuilder,
    private paisService: PaisService,
    private activedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.formPais = this.buildFormPais();
  }

  ngOnInit(): void {
    const paisId = Number(this.activedRoute.snapshot.paramMap.get('id'));

    this.paisService.listById(paisId).subscribe(
      (resp) => {
        //atribui os valores no form de editar
        this.formPais.patchValue(resp[0]);
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }

  private buildFormPais(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      nome: [null, Validators.required],
      sigla: [null, Validators.required],
      gentilico: [null, Validators.required],
    });
  }

  public isFormControlInvalid(controlName:string):boolean {
    return !!(this.formPais.get(controlName)?.invalid && this.formPais.get(controlName)?.touched)
  }

 updatePais(){
    const pais:Pais = this.formPais.value as Pais; 

    this.paisService.saveNew(pais).subscribe(
      resp => {
        this.formPais.reset();
        this.toastr.success('País atualizado com sucesso!');
        this.router.navigate(['/paises']);
      },
      err => {
        this.toastr.error('Erro ao atualizar país.')
      }
    )
  }
}
