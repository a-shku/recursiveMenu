import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationErrorComponentComponent } from "./navigation-error.component";

describe("NavigationErrorComponentComponent", () => {
    let component: NavigationErrorComponentComponent;
    let fixture: ComponentFixture<NavigationErrorComponentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavigationErrorComponentComponent],
        });
        fixture = TestBed.createComponent(NavigationErrorComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
