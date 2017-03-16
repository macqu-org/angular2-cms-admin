import {Component, AfterViewInit} from '@angular/core';
import {GlobalState} from "./app.global.state";
import {BaImageLoaderService} from "./theme/services/baImageLoader.service";
import {BaThemeSpinner} from "./theme/services/baThemeSpinner.service";
import {BaThemeConfig} from "./theme/theme.config";
import {BaThemePreloader} from "./theme/services/baThemePreloader.service";
import {layoutPaths} from './theme/theme.constants';

import './app.scss';
import './theme/initial.scss';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements AfterViewInit {

    //菜单是否折叠
    isMenuCollapsed: boolean = false;

    constructor(private _state: GlobalState,
                private _imageLoader: BaImageLoaderService,
                private _spinner: BaThemeSpinner,
                private themeConfig: BaThemeConfig) {

        this.themeConfig.config();
        this._loadImages();

        this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
            this.isMenuCollapsed = isCollapsed;
        });

    }

    public ngAfterViewInit(): void {
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    private _loadImages(): void {
        BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'))
    }
}

