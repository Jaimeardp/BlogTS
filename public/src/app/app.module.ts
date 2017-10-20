import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostComponent } from './post/post.component';
import { UserNewComponent } from './usuario/user-new/user-new.component';
import { UserListComponent } from './usuario/user-list/user-list.component';
import { UserEditComponent } from './usuario/user-edit/user-edit.component';
import { UserDetailsComponent } from './usuario/user-details/user-details.component';

import{HttpModule} from '@angular/http'

import {UserService} from './usuario/user.service';
import { UserLoginComponent } from './usuario/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
  {
    path:'',
    component:LoginFormComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'usuario/user-new',
    component:UserNewComponent
  },
  {
    path:'usuario/:id',
    component: UsuarioComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PostComponent,
    UserNewComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
