import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-list/menu-item/menu-item.component';
import { MenuRoutingModule } from './menu-routting.module';
//import { AuthRoutingModule } from './auth-routing.module';
import { menuReducer } from './store/menu.reducers';

@NgModule({
    declarations: [
        MenuComponent,
        MenuListComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        MenuRoutingModule
    ],
    exports: [
        MenuComponent,
        MenuListComponent,
        MenuItemComponent
    ]
})
export class MenuModule { }
