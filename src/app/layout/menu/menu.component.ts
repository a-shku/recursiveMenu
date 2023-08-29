import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Observable, map, filter } from "rxjs";

import { MenuItem } from "./menu-models";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, OnChanges {
    @Input()
    menuItems!: MenuItem[];

    public value!: string;
    public isNavbarCollapsed!: boolean;
    public isCollapsed = true;
    public routeUrl!: Observable<any>;
    public currentUrl!: any;
    public homeLink = "/";
    public page1Link = "/page1";

    constructor(public route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.url.subscribe((segments) => {
            this.currentUrl = segments.join("/");
            // debugger;
        });

        console.log("route", this.route, this.router);
        // debugger;
        this.route.url.subscribe((data) => {
            console.log("subs", data);
            // debugger;
        });

        this.routeUrl = this.router.events.pipe(
            filter((route) => route instanceof NavigationEnd)
        );

        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         debugger;
        //     }
        //     console.log(event, this.routeUrl);
        //     // debugger;
        // });
    }

    ngOnChanges(): void {
        console.log("route", this.route, this.router);
        // debugger;
    }

    openMenu(dropdown: any) {
        console.log("dropdown", dropdown);
        // dropdown.open();
    }

    closeMenu(dropdown: any) {
        console.log("dropdown", dropdown);
        // dropdown.close();
    }

    preventClose(event: MouseEvent): void {
        event.preventDefault();
        event.stopPropagation();
    }
}
