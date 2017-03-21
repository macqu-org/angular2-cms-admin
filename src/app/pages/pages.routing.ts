import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Pages} from "./pages.component";

const routes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {path: '', redirectTo: 'news', pathMatch: 'full'},
            {path: '**', redirectTo: 'news'},
            {path: 'news', loadChildren: './news/news.module#NewsModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {
}