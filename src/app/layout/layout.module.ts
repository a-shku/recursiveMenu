import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule, NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "../app-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { LayoutComponent } from "./layout.component";
import { NavigationErrorComponent } from "./navigation-error-component/navigation-error.component";
import { MenuBuilderComponent } from "./menu-builder/menu-builder.component";
// import { MenuItemComponent } from "./menu/menu-item/menu-item.component";
import { RecursiveMenuComponent } from "./recursive-menu/recursive-menu.component";
import { MenuItemComponent } from "./recursive-menu/menu-item/menu-item.component";
import { ItemBuilderComponent } from "./recursive-menu/item-builder/item-builder.component";

@NgModule({
    declarations: [
        MenuComponent,
        LayoutComponent,
        NavigationErrorComponent,
        MenuBuilderComponent,
        MenuItemComponent,
        RecursiveMenuComponent,
        MenuItemComponent,
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
