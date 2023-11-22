import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token == null){
      this.router.navigate(['/login'])
    }
    
  }

  public getUsername():string{
    const nome = localStorage.getItem('nome');
    return nome || "";
  }

}
