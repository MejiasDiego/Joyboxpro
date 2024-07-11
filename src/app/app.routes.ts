import { Routes } from '@angular/router';
import { BoxComponent } from './pages/box/box.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';
import { AboutComponent } from './pages/about/about.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/loginJoybox/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { BoxDentroComponent } from './pages/boxdentro/boxdentro.component';
import { PagoComponent } from './pago/pago.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'box', component: BoxComponent },
  { path: 'boxdentro', component: BoxDentroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'pago', component: PagoComponent},
  { path: '**', component: Pagina404Component },
  
];
