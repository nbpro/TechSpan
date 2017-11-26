import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';



import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import {DashboardModule} from './modules/dashboard/dashboard.module';


const APP_ROUTES: Route[] = [
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
];
const APP_ROUTE_CONF: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, RouterModule,
    HttpModule,
    APP_ROUTE_CONF,
    DashboardModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}

