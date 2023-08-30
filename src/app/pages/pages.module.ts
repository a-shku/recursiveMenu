import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Page1Component } from "./page1/page1.component";
import { HomeComponent } from "./home/home.component";
import { Cat1Page1Component } from "./cat1-page1/cat1-page1.component";
import { Cat1Page2Component } from "./cat1-page2/cat1-page2.component";
import { Cat1Page3Component } from "./cat1-page3/cat1-page3.component";
import { Cat2Page1Component } from "./cat2-page1/cat2-page1.component";
import { Cat2Page2Component } from "./cat2-page2/cat2-page2.component";
import { SubItemPage1Component } from "./sub-item-page1/sub-item-page1.component";
import { SubItemPage2Component } from "./sub-item-page2/sub-item-page2.component";

@NgModule({
    declarations: [
        Page1Component,
        HomeComponent,
        Cat1Page1Component,
        Cat1Page2Component,
        Cat1Page3Component,
        Cat2Page1Component,
        Cat2Page2Component,
        SubItemPage1Component,
        SubItemPage2Component,
    ],
    imports: [CommonModule],
})
export class PagesModule {}
