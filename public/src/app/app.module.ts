import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostComponent } from './post/post.component';
import { UserNewComponent } from './usuario/user-new/user-new.component';
import { UserListComponent } from './usuario/user-list/user-list.component';
import { UserEditComponent } from './usuario/user-edit/user-edit.component';
import { UserDetailsComponent } from './usuario/user-details/user-details.component';
import { LogoutComponent } from './logout/logout.component';

import{HttpModule} from '@angular/http'

import { RoutingModule } from './routing.module';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { UserLoginComponent } from './usuario/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

import {RouterModule, Routes} from '@angular/router';



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
    DashboardComponent,
    AboutComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthGuardLogin,
    AuthGuardAdmin,
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
