import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { MenuItem } from "../menu-models";

@Component({
    selector: "app-item-builder",
    templateUrl: "./item-builder.component.html",
    styleUrls: ["./item-builder.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemBuilderComponent {
    @Input()
    menuItems: MenuItem[] = [];
}
