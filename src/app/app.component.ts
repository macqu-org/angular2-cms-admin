import {Component, ViewContainerRef} from '@angular/core';
import {GlobalState} from "./app.global.state";
import {BaImageLoaderService} from "./theme/services/baImageLoader.service";
import {BaThemeSpinner} from "./theme/services/baThemeSpinner.service";
import {BaThemeConfig} from "./theme/theme.config";
import {BaThemePreloader} from "./theme/services/baThemePreloader.service";
import {layoutPaths} from "./theme/theme.constants";

import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public isMenuCollapsed: boolean = false;

    constructor(private _state: GlobalState,
                private _imageLoader: BaImageLoaderService,
                private _spinner: BaThemeSpinner,
                private viewContainerRef: ViewContainerRef,
                private themeConfig: BaThemeConfig) {

        themeConfig.config();

        this._loadImages();

        this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    private _loadImages(): void {
        // register some loaders
        BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
    }
}

