import { Component, ChangeDetectionStrategy } from "@angular/core";

import { MENU_ITEMS } from "./recursive-menu/menu-models";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    public menuItems = MENU_ITEMS;

    constructor() {}
}
