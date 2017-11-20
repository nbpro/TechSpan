import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router/src/config';
import { LangdashboardComponent } from './dashboard/langdashboard/langdashboard.component';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './dashboard/langdashboard/login/login.component';


// in dashboard module
const dashboardRoutes: Routes = [
  { path: '',  component: DashboardComponent },
  // { path: 'dashboard/:id', component : LangdashboardComponent},
  { path: 'dashboard/login', component : LoginComponent}
];

const dashboardRouting = RouterModule.forChild(dashboardRoutes);

@NgModule({
  imports: [
    CommonModule,
    // RouterModule,
    // dashboardRouting,
    // MatIconModule,
    // MatButtonModule,
    // MatListModule,
    // MatMenuModule,
    // MatSelectModule,
    // MatInputModule,
    // Ng2TableModule,
    // MatTableModule,
  ],
  declarations: [DashboardComponent, LangdashboardComponent, LoginComponent],
})
export class DashboardModule { }
