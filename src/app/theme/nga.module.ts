import {ModuleWithProviders, NgModule} from "@angular/core";
import {BaThemeConfigProvider} from "./theme.configProvider";
import {BaThemeConfig} from "./theme.config";
import {BaImageLoaderService} from "./services/baImageLoader.service";
import {BaThemePreloader} from "./services/baThemePreloader.service";
import {BaThemeSpinner} from "./services/baThemeSpinner.service";
import {BaMenuService} from "./services/baMenu.service";
import {CommonModule} from "@angular/common";
import {BaSidebar} from "./components/baSidebar/baSidebar.component";
import {BaThemeRun} from "./directives/baThemeRun.directive";
import {BaMenu} from "./components/baMenu/baMenu.component";
import {BaMenuItem} from "./components/baMenu/components/baMenuItem/baMenuItem.component";
import {BaScrollPosition} from "./directives/baScrollPosition.directive";
import {BaSlimScroll} from "./directives/baSlimScroll.directive";
import {RouterModule} from "@angular/router";

const NGA_COMPONENTS = [
    BaSidebar,
    BaMenu,
    BaMenuItem
];

const NGA_DIRECTIVES = [
    BaThemeRun,
    BaScrollPosition,
    BaSlimScroll
];

const NGA_SERVICES: any[] = [
    BaImageLoaderService,
    BaThemePreloader,
    BaThemeSpinner,
    BaMenuService
];

@NgModule({
    declarations: [...NGA_DIRECTIVES, ...NGA_COMPONENTS],
    imports: [CommonModule,RouterModule],
    exports: [...NGA_DIRECTIVES, ...NGA_COMPONENTS]
})

export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [BaThemeConfigProvider, BaThemeConfig, ...NGA_SERVICES]
        };
    }
}