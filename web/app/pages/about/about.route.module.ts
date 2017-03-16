import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AboutPageComponent} from './about.component';

/**
 * 模块的内的子路由
 * */
const routes: Routes = [
    {
        path: '',
        component: AboutPageComponent
    },
    {
        path: '**',
        component: AboutPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AboutRoutingModule {
}