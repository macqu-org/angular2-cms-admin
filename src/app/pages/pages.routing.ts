import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Pages} from "./pages.component";
import {HomePageComponent} from "./home/home.component";

const routes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {path: '', redirectTo: 'news', pathMatch: 'full'},
            {path: '**', component: HomePageComponent},
            {path: 'news', component: HomePageComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {
}