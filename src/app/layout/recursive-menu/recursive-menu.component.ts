import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    OnDestroy,
} from "@angular/core";
import { RouterEvent, Event, Router, NavigationEnd } from "@angular/router";
import { Observable, filter, takeUntil, Subject } from "rxjs";

import { MenuItem } from "../menu/menu-models";

@Component({
    selector: "app-recursive-menu",
    templateUrl: "./recursive-menu.component.html",
    styleUrls: ["./recursive-menu.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecursiveMenuComponent implements OnInit, OnDestroy {
    @Input()
    menuItems: MenuItem[] = [];

    private destroy$$ = new Subject<void>();
    public routeUrl$!: Observable<NavigationEnd>;
    public isCollapsed: boolean = true;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.routeUrl$ = this.router.events.pipe(
            takeUntil(this.destroy$$),
            filter((event: Event): event is NavigationEnd => {
                return event instanceof NavigationEnd;
            })
        );
    }

    ngOnDestroy(): void {
        this.destroy$$.next();
        this.destroy$$.complete();
    }
}
