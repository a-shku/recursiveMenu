import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
} from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "../app-routing.module";
import { LayoutComponent } from "./layout.component";
import { NavigationErrorComponent } from "./navigation-error-component/navigation-error.component";
import { RecursiveMenuComponent } from "./recursive-menu/recursive-menu.component";
import { ItemBuilderComponent } from "./recursive-menu/item-builder/item-builder.component";

@NgModule({
    declarations: [
        LayoutComponent,
        NavigationErrorComponent,
        RecursiveMenuComponent,
        ItemBuilderComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule,
        NgbNavModule,
        NgbDropdownModule,
    ],
    exports: [LayoutComponent],
})
export class LayoutModule {}
