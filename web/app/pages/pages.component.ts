import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuServce } from './menu/menu.service';

@Component({
    selector: 'pages',
    template: '<router-outlet></router-outlet>'
})

export class Pages {
    constructor(private _menuServcie: MenuServce) {

    }

    private PAGES_MENU: any[] = [{ path: 'pages', children: [{ path: 'home' }, { path: 'other' }] }];

    ngOnInit() {
        this._menuServcie.updateMenuByRoutes(<Routes>this.PAGES_MENU);
    }
}