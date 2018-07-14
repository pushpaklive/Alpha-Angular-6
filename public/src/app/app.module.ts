import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonService } from './common.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpClientModule,
                  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, PageNotFoundComponent ],
  providers: [CommonService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
