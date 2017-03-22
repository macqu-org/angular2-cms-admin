import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Pages} from "./pages.component";

const routes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {path: '', redirectTo: 'news', pathMatch: 'full'},
            {path: 'news', loadChildren: './news/news.module#NewsModule?'},
            {path: 'forum', loadChildren: './forum/forum.module#ForumModule'},
            {path: '**', redirectTo: 'news'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {
}