import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paises-edit',
  templateUrl: './paises-edit.component.html',
  styleUrls: ['./paises-edit.component.css']
})
export class PaisesEditComponent implements OnInit {

  //permite acessar dados da url
  constructor(private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const paisId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(paisId);
  }

}
