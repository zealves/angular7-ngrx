import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';

const contactsRoutes: Routes = [
    {
        path: '', component: ContactsComponent, children: [
            { path: '', component: ContactsComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(contactsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class ContactsRoutingModule { }
