import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Tech-Span Dashboard';
  private gitHubDataUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/2015-01-01-0d42d3c3.json'
  private apiUrl = 'https://api.github.com/search/repositories?q=django';
  topTenData:any={};
  allDataRepo:any= {};

  constructor( 
    private http : Http,
    private router : Router
  ) { 
    console.log('Inside dashboard constructor');
  }

  ngOnInit(){}

  clicked(id,evt) :void{
    console.log(id,evt)
    evt.preventDefault();
    let currentTarget = evt && evt['currentTarget'];
    const value = currentTarget && currentTarget.getAttribute('data-language');
    this.router.navigate([`dashboard/${value}`]);
  }



}
