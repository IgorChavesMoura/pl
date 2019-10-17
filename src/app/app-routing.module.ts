import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InstituteListComponent } from './components/institute/institute-list/institute-list.component';
import { AuthGuard } from './auth/AuthGuard';
import { InstituteDetailComponent } from './components/institute/institute-detail/institute-detail.component';
import { SecretaryDetailComponent } from './components/institute/secretary/secretary-detail/secretary-detail.component';
import { PublicationDetailComponent } from './components/institute/publication/publication-detail/publication-detail.component';


const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'institutes', component:InstituteListComponent, canActivate:[AuthGuard] },
  { path:'institute/create', component:InstituteDetailComponent, canActivate:[AuthGuard] },
  { path:'institute/:id', component:InstituteDetailComponent, canActivate:[AuthGuard] },
  { path:'secretary/create', component:SecretaryDetailComponent, canActivate:[AuthGuard] },
  { path:'secretary/:id', component:SecretaryDetailComponent, canActivate:[AuthGuard] },
  { path:'publication/create', component:PublicationDetailComponent, canActivate:[AuthGuard] },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'**', redirectTo:'/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
