import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
    imports: [BrowserModule, PagesModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
