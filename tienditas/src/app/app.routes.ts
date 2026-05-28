import { Routes } from '@angular/router';
import { Dasboard } from './pages/dasboard/dasboard';
import { Products } from './pages/products/products';
import { Form } from './pages/form/form';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dasboard,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'form',
    component: Form,
  },
];
