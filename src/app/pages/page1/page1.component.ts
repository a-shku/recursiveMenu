import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-page1",
    templateUrl: "./page1.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component {
    constructor() {}
}
