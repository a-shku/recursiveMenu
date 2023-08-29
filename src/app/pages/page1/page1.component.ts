import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";

@Component({
    selector: "app-page1",
    templateUrl: "./page1.component.html",
    styleUrls: ["./page1.component.scss"],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component implements OnInit {
    public currentUrl$!: any;

    constructor(public route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.currentUrl$ = this.route.url.pipe(
            map((segments) => segments.join("/"))
        );

        // this.route.url.subscribe((segments) => {
        //     this.currentUrl = segments.join("/");
        //     debugger;
        // });
    }
}
