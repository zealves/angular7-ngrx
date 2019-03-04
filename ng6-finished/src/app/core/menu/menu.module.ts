import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-list/menu-item/menu-item.component';
import { MenuRoutingModule } from './menu-routting.module';
//import { AuthRoutingModule } from './auth-routing.module';
import { menuReducer } from './store/menu.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './store/menu.effects';

@NgModule({
    declarations: [
        MenuComponent,
        MenuListComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        BrowserAnimationsModule,
        EffectsModule.forFeature([MenuEffects])
    ],
    exports: [
        MenuComponent,
        MenuListComponent,
        MenuItemComponent
    ]
})
export class MenuModule { }
