import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    inject,
} from "@angular/core";
import { Event, Router, NavigationEnd } from "@angular/router";
import { Observable, filter } from "rxjs";

import { MenuItem } from "./menu-models";

@Component({
    selector: "app-recursive-menu",
    templateUrl: "./recursive-menu.component.html",
    styleUrls: ["./recursive-menu.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecursiveMenuComponent implements OnInit {
    @Input()
    menuItems: MenuItem[] = [];

    private router: Router = inject(Router);

    public routeUrl$!: Observable<NavigationEnd>;
    public isCollapsed: boolean = true;

    constructor() {}

    ngOnInit(): void {
        this.routeUrl$ = this.router.events.pipe(
            filter((event: Event): event is NavigationEnd => {
                return event instanceof NavigationEnd;
            })
        );
    }
}
