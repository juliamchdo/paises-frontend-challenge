import { Component, OnInit } from '@angular/core';
import { PaisService } from '../shared/pais.service';
import { Pais } from '../shared/pais.model';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css'],
})
export class PaisesListComponent implements OnInit {
  public listPaises: Array<Pais> = [];
  public searchPaisForm: FormGroup;

  public isAdmin: boolean = localStorage.getItem('administrador') === 'true' ? true : false
  

  constructor(private paisService: PaisService, private toastr:ToastrService, private fb: FormBuilder) {
    this.searchPaisForm = this.searchForm();
  }

  ngOnInit(): void {

    this.paisService.listAll().subscribe(
      res => {this.listPaises = res}
    )
  }

  public removerPais(paisId : any){
    this.paisService.delete(paisId).subscribe(
      resp => {
        this.toastr.success('País excluído com sucesso!');
        this.listPaises = this.listPaises.filter(p => p.id !== paisId);
      },
      err => {
        this.toastr.error('Erro ao excluir País: ', err)
      }
    )
  }

  public searchForm():FormGroup{
    return this.fb.group({
      filtro: [null, [Validators.required]],
    });
  }

  public searchPais(){
    const filtro = this.searchPaisForm.value;

    this.paisService.searchPaises(filtro.filtro).subscribe(
      resp => {
        this.listPaises = resp
      },
      error => {

      }
    )
    
  }

  updateList($event:Pais){
    this.listPaises.push($event);
  }
}
