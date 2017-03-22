
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ForumRoutingModule} from "./forum.routing";
import {ForumComponent} from "./forum.component";

@NgModule({
    imports:[CommonModule,ForumRoutingModule],
    declarations:[ForumComponent]
})

export class ForumModule{}