import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { protegerInicioSesionGuard } from './guardianes/proteger-inicio-sesion.guard';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from './pages/cerrar-sesion/cerrar-sesion.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [protegerInicioSesionGuard] },
  { path: 'contactos', component: ContactosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'iniciarSesion', component: IniciarSesionComponent },
  { path: 'cerrarSesion', component: CerrarSesionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
