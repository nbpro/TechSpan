import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
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

  ngOnInit(){
    this.getTopTenRepos();
    this.getAllRepoData();
  }

  getData(){
    return this.http.get(this.apiUrl).map((res:Response) => res.json())
  }

  getTopTenRepos(){
    this.getData().subscribe(data => {
      this.topTenData = data;
    })
  }

  getAllRepoData():void{
    this.http.get(this.gitHubDataUrl).map((res:Response ) => res.json()).subscribe(data =>{
      console.table(data);
      this.allDataRepo = data;
    });
  }

  clicked(evt) :void{
    evt.preventDefault();
    let currentTarget = evt && evt['currentTarget'];
    const value = currentTarget && currentTarget.getAttribute('data-language');
    this.router.navigate([`dashboard/${value}`]);
  }



}
