import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HomePageComponent} from './home.component';
import {HomeRoutingModule} from './home.route.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    declarations: [HomePageComponent]
})

export class HomeModule {
}