import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';//在根模块中导入根组件

import { HomePageComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';

const appRoutes = [

    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
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

//模块导入
@NgModule({
    declarations: [AppComponent, HomePageComponent, AboutPageComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    imports: [BrowserModule, NgbModule.forRoot(), RouterModule.forRoot(appRoutes, { useHash: true }), SidebarModule],
    bootstrap: [AppComponent]
})

export class AppModule {
    private _opened: boolean = false;

    private _toggleSidebar() {
        this._opened = !this._opened;
    }
}
