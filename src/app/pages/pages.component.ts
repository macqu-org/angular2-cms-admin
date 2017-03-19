import {Component, OnInit} from "@angular/core";
import {BaMenuService} from "../theme/services/baMenu.service";
import {Routes} from "@angular/router";
import {PAGES_MENU} from "./pages.menu";

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html'
})

export class Pages implements OnInit {
    constructor(private _menuService: BaMenuService) {
    }

    ngOnInit(): void {
        this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    }
}