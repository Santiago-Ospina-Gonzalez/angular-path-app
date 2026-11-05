import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Servicios } from './pages/servicios/servicios';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: 'inicio' }
];