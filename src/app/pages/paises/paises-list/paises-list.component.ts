import { Component, OnInit } from '@angular/core';
import { PaisService } from '../shared/pais.service';
import { Pais } from '../shared/pais.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css'],
})
export class PaisesListComponent implements OnInit {
  public listPaises: Array<Pais> = [];

  public isAdmin: boolean = localStorage.getItem('administrador') === 'true' ? true : false
  

  constructor(private paisService: PaisService, private toastr:ToastrService) {}

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

  updateList($event:Pais){
    this.listPaises.push($event);
  }
}
