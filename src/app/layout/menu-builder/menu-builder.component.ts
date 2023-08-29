import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { MenuItem } from "../menu/menu-models";

@Component({
    selector: "app-menu-builder",
    templateUrl: "./menu-builder.component.html",
    styleUrls: ["./menu-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBuilderComponent {
    @Input()
    items: MenuItem[] = [];

    constructor() {
        // console.log(this.items);
        // debugger;
    }
}
