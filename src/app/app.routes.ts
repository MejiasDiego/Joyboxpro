import { Routes } from '@angular/router';
import { BoxComponent } from './pages/box/box.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/loginJoybox/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { BoxDentroComponent } from './pages/boxdentroECOBOX/boxdentro.component';
import { PagoComponent } from './pago/pago.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

import { BoxdentroUNDERBOXComponent } from './pages/boxdentro-underbox/boxdentro-underbox.component';
import { BoxdentroSPRINGBOXComponent } from './pages/boxdentro-springbox/boxdentro-springbox.component';
import { BoxDentroCHILLBOXComponent } from './pages/boxdentro-chillbox/boxdentro-chillbox.component';
import { BoxDentroJAVABOXComponent } from './pages/boxdentro-javabox/boxdentro-javabox.component';
import { BoxDentroMIRRORBOXComponent } from './pages/boxdentro-mirrorbox/boxdentro-mirrorbox.component';
import { BoxdentroPEACEBOXComponent } from './pages/boxdentro-peacebox/boxdentro-peacebox.component';
import { BoxNeutralProComponent } from './pages/boxdentroneutralboxpro/boxdentroneutralboxpro.component';
import { BoxDentroNETComponent } from './pages/boxdentro-net/boxdentro-net.component';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'box', component: BoxComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ecobox', component: BoxDentroComponent },
  { path: 'chillbox', component: BoxDentroCHILLBOXComponent },
  { path: 'mirrorbox', component: BoxDentroMIRRORBOXComponent },
  { path: 'peacebox', component: BoxdentroPEACEBOXComponent },
  { path: 'javabox', component: BoxDentroJAVABOXComponent },
  { path: 'underbox', component: BoxdentroUNDERBOXComponent },
  { path: 'netbox', component: BoxDentroNETComponent },
  { path: 'springbox', component: BoxdentroSPRINGBOXComponent },
  { path: 'neutralbox', component: BoxNeutralProComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'pago', component: PagoComponent },
  { path: '**', component: Pagina404Component },
];
