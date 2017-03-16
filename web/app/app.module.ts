import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.route.module';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
