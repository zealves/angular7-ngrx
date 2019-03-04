import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import * as MenuActions from '../store/menu.actions';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
    collapseMenu: boolean = false

    menuItems = [
        {
            title: 'Item1',
            path: '/recipes',
            children: [
                { title: 'Item1 - Item1', path: '/item1/1' }
            ]
        },
        {
            title: 'Item2',
            path: '/shopping-list',
            children: [
                { title: 'Item2 - Item2', path: '/item2/2' }
            ]
        },
        {
            title: 'Contacts',
            path: '/contacts',
            children: [
            ]
        }
    ]

    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit() {
        const x = this.store.select('menu').subscribe(
            data => {
                this.collapseMenu = data.collapse
            }
        )
    }

    toggleMenu() {
        this.store.dispatch(new MenuActions.ToggleMenu(!this.collapseMenu))
    }

}
