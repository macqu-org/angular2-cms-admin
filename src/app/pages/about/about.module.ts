import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AboutRoutingModule} from './about.route.module';
import {AboutPageComponent} from './about.component';
import {ShareModule} from "../shared/share.module";

@NgModule({
    imports: [CommonModule,ShareModule, AboutRoutingModule],
    declarations: [AboutPageComponent]
})

export class AboutModule {
}