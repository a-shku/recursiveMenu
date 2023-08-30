import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-cat1-page1",
    templateUrl: "./cat1-page1.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cat1Page1Component {}
