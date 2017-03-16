import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from 'ng-sidebar';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.route.module';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, SidebarModule, NgbModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    private _opened: boolean = false;

    private _toggleSidebar() {
        this._opened = !this._opened;
    }
}
