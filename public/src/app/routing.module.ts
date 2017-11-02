import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HttpModule} from '@angular/http'
import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { PostComponent } from './post/post.component';
import { UserNewComponent } from './usuario/user-new/user-new.component';
import { UserListComponent } from './usuario/user-list/user-list.component';
import { UserEditComponent } from './usuario/user-edit/user-edit.component';
import { UserDetailsComponent } from './usuario/user-details/user-details.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import { UserLoginComponent } from './usuario/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes:Routes = [
  {
    path:'',
    component:AboutComponent
  },
  {
    path:'usuario',
    //component:UsuarioComponent,
    children:[
      {
        path:'lista',
        component:UserListComponent
      },
      {
        path:'new',
        component:UserNewComponent
      }
    ]
  },
  {
    path:'list',
    component:UserListComponent
  },
  {
    path:'login',
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
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}