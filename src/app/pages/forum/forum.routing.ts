import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ForumComponent} from "./forum.component";

const routes: Routes = [
    {
        path: '', redirectTo: "users", pathMatch: 'full'
    },
    {
        path: "users", component: ForumComponent
    },
    {
        path: "comments", component: ForumComponent
    },
    {
        path: "**", component: ForumComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ForumRoutingModule {
}