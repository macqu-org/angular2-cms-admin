import {NgModule} from "@angular/core";
import {Pages} from "./pages.component";
import {CommonModule} from "@angular/common";
import {PagesRoutingModule} from "./pages.routing";
import {NgaModule} from "../theme/nga.module";

@NgModule({
    imports: [CommonModule, NgaModule, PagesRoutingModule],
    declarations: [Pages]
})

export class PagesModule {
}