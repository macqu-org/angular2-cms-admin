import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);