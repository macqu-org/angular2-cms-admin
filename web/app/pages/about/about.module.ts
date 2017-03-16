import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AboutRoutingModule} from './about.route.module';
import {AboutPageComponent} from './about.component';

@NgModule({
    imports: [CommonModule, AboutRoutingModule],
    declarations: [AboutPageComponent]
})

export class AboutModule {
}