import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core/esm';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
