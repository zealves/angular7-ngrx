import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const shoppingListRoutes: Routes = [
    {
        path: '', component: ShoppingListComponent, children: [
            { path: '', component: ShoppingListComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class ShoppingListRoutingModule { }
