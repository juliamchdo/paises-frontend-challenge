import { Component, OnInit } from '@angular/core';
import { TokenRefreshService } from './security/login/token-refres.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private tokenRefreshService: TokenRefreshService){}
  ngOnInit(): void {
    this.tokenRefreshService.startTokenRefresh().subscribe();
  }
  title = 'frontend-challenge';
}
