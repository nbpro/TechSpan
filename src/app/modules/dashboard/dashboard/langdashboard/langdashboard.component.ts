import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { LangDashBoardService } from './langdashboard.service';


@Component({
  selector: 'app-langdashboard',
  templateUrl: './langdashboard.component.html',
  styleUrls: ['./langdashboard.component.css']
})
export class LangdashboardComponent implements OnInit {

  dataSource: any = [];
  language: string;
  langDetails: any = {};
  displayedColumns: any = [];
  constructor(
    private route: ActivatedRoute,
    private  service : LangDashBoardService
  ) { }

  ngOnInit() {
    this.language = this.route.snapshot.params['id'];
    this.getAllRepos(this.language);
  }

  getAllRepos(lang: string) {
    this.displayedColumns = ['full_name', 'description'];
    this.dataSource = this.service.getAllReposFromGithub(lang);
  }
  getRepoDetails(event){
    console.log(event);
    debugger;
  }
}
export interface Element {
  full_name: string;
  description: number;
}


