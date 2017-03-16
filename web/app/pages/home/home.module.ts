import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HomePageComponent} from './home.component';
import {HomeRoutingModule} from './home.route.module';
import {ShareModule} from "../shared/share.module";

@NgModule({
    imports: [CommonModule, ShareModule, HomeRoutingModule],
    declarations: [HomePageComponent]
})

export class HomeModule {
}