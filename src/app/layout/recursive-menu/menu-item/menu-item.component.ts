import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { MenuItem } from "../../menu/menu-models";

@Component({
    selector: "app-menu-item",
    templateUrl: "./menu-item.component.html",
    styleUrls: ["./menu-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
    @Input()
    items: MenuItem[] = [];
}