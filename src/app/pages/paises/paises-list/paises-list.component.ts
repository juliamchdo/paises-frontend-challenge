import { Component, OnInit } from '@angular/core';
import { PaisService } from '../shared/pais.service';
import { Pais } from '../shared/pais.model';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css'],
})
export class PaisesListComponent implements OnInit {
  public listPaises: Array<Pais> = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {

    this.paisService.listAll().subscribe(
      res => {this.listPaises = res}
    )
  }

  public removerPais(paisId : any){
    console.log(paisId);
  }
}
