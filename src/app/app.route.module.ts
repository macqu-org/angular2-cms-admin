import {NgModule} from "@angular/core";
import {APP_BASE_HREF} from '@angular/common';

import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/pages/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: 'app/pages/about/about.module#AboutModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: 'app/pages/home/home.module#HomeModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    exports: [RouterModule]
})

export class AppRoutingModule {
}