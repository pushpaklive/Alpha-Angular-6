import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CommonService } from './common.service'
//import { AfService } from './providers/af.service';
import { environment } from '../environments/environment';
import { MessageListComponent } from './message-list/message-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';

//We should define routing from most specific to least specific otherwise wildroute only 
//will be rendered -- Most Important Thing here
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'messages', component: MessageListComponent},
  { path: 'user/:_id', component: UserDetailComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent }
  
]

export const firebaseConfig = {
  apiKey: "AIzaSyDnQQbPCM7k6YOrKLn9pbswGpnYod9lglU",
  authDomain: "xtreme-19b39.firebaseapp.com",
  databaseURL: "https://xtreme-19b39.firebaseio.com",
  projectId: "xtreme-19b39",
  storageBucket: "xtreme-19b39.appspot.com",
  messagingSenderId: "312847431747"
}

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule],
  declarations: [AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MessageListComponent,
    RegisterComponent,
    UserDetailComponent],
  providers: [CommonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
