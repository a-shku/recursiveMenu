import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-navigation-error.component",
    templateUrl: "./navigation-error.component.html",
    styleUrls: ["./navigation-error.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationErrorComponent {
    constructor() {
        // alert("navErr");
    }
}
