import {NgModule} from "@angular/core";
import {APP_BASE_HREF} from '@angular/common';

import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
    {path: '', redirectTo: 'pages', pathMatch: 'full'},
    {path: '**', redirectTo: 'pages'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    exports: [RouterModule]
})

export class AppRoutingModule {
}