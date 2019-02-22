import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations: [
        HeaderComponent,
        NavbarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports : [
        HeaderComponent,
        NavbarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }
