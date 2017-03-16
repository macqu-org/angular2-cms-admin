import {NgModule} from "@angular/core";
import {APP_BASE_HREF} from '@angular/common';

import {Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from './pages/home/home.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomePageComponent
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
        component: HomePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    declarations: [HomePageComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    exports: [RouterModule]
})

export class AppRoutingModule {
}