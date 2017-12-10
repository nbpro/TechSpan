import { RepodetailsComponent } from "./repodetails.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router/src/config";
import { RouterModule } from "@angular/router";


const repoModuleRoute:Routes =[{
  path :"",
  component :RepodetailsComponent
}];
const routerRepoModule = RouterModule.forChild(repoModuleRoute);
@NgModule({
  imports:[routerRepoModule],
  declarations: [RepodetailsComponent],
  exports :[RepodetailsComponent]
  })
  
  export class RepoDetailsModule { }