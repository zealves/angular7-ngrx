import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../auth/auth-guard.service';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-list/menu-item/menu-item.component';
import { ContactsComponent } from '../../contacts/contacts.component';

// const recipesRoutes: Routes = [
//     {
//         path: '', component: RecipesComponent, children: [
//             { path: '', component: RecipeStartComponent },
//             { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
//             { path: ':id', component: RecipeDetailComponent },
//             { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
//         ]
//     },
// ];

const menuRoutes: Routes = [
    {
        path: '', component: MenuComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(menuRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class MenuRoutingModule { }
