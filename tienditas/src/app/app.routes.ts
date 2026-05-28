import { Routes } from '@angular/router';
import { Dasboard } from './pages/dasboard/dasboard';
import { ProductsComponent } from './pages/products/products/products.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dasboard
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
