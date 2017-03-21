import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NewsRoutingModule} from "./news.routing";
import {NewsComponent} from "./news.component";

@NgModule({
    imports: [CommonModule, NewsRoutingModule],
    declarations: [NewsComponent]
})

export class NewsModule {
}