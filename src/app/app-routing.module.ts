import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Page1Component } from "./pages/page1/page1.component";
import { Cat1Page2Component } from "./pages/cat1-page2/cat1-page2.component";
import { Cat1Page3Component } from "./pages/cat1-page3/cat1-page3.component";
import { Cat2Page1Component } from "./pages/cat2-page1/cat2-page1.component";
import { Cat2Page2Component } from "./pages/cat2-page2/cat2-page2.component";
import { SubItemPage1Component } from "./pages/sub-item-page1/sub-item-page1.component";
import { NavigationErrorComponent } from "../app/layout/navigation-error-component/navigation-error.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        // title: "The page title should be here"
        // I don't set title intentionally
    },
    {
        path: "2",
        component: Cat1Page2Component,
    },
    {
        path: "category_1",

        children: [
            {
                path: "",
                redirectTo: "item_1",
                pathMatch: "full",
            },
            {
                path: "item_1",
                children: [
                    {
                        path: "subItem_1_1",
                        component: SubItemPage1Component,
                    },
                ],
            },
            {
                path: "item_2",
                component: Cat1Page2Component,
            },
            {
                path: "item_3",
                component: Cat1Page3Component,
            },
        ],
    },
    {
        path: "category_2",

        children: [
            {
                path: "",
                redirectTo: "item_1",
                pathMatch: "full",
            },
            {
                path: "item_1",
                component: Cat2Page1Component,
            },
            {
                path: "item_2",
                component: Cat2Page2Component,
            },
        ],
    },
    {
        path: "page1",
        component: Page1Component,
    },
    {
        path: "**",
        component: NavigationErrorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
