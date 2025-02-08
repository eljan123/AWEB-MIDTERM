import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client-prg';
  httpusers: any;

  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getUsersRemotely().subscribe((data:any) => {
      this.httpusers = data;
    });
  }
}
