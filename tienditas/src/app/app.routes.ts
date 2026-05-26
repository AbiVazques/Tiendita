import { Routes } from '@angular/router';
import { Dasboard } from './pages/dasboard/dasboard';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dasboard,
  },
  {
    path: 'products',
    component: Products,
  },
];
