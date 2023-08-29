import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MenuItem, MENU_ITEMS } from "./menu/menu-models";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent {
    public menuItems: MenuItem[] = MENU_ITEMS;
    public activeRoute!: string;

    constructor(private router: Router) {
        this.menuItems = MENU_ITEMS;
        // debugger;
    }

    onActivate(): void {
        this.activeRoute = this.router.url;
        // debugger;
    }
}
