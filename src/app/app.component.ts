import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Options } from 'selenium-webdriver/opera';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store/src/store';

import * as appActions from "./state/app.action";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'TechSpan Title';
  options: any[];

  constructor(){
  }
 
  ngOnInit(): void {
    
  }


}

