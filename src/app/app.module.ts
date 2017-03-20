import {NgModule, enableProdMode} from '@angular/core';
import {BrowserModule, disableDebugTools} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {PagesModule} from "./pages/pages.module";
import {NgaModule} from "./theme/nga.module";
import {GlobalState} from "./app.global.state";

// Application wide providers
const APP_PROVIDERS = [
    GlobalState
];

// 部署生成环境时angular2需要启用的配置
//disableDebugTools();
//enableProdMode();

@NgModule({
    imports: [BrowserModule, NgaModule.forRoot(), PagesModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        APP_PROVIDERS
    ]
})

export class AppModule {
}
