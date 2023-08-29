import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PagesModule } from "./pages/pages.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, LayoutModule, NgbModule, PagesModule],
    providers: [],
    // exports: [NgbModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
