import { Action } from '@ngrx/store';

export const TOGGLE_MENU = 'TOGGLE_MENU';

export class ToggleMenu implements Action {
    readonly type = TOGGLE_MENU;

    constructor(public payload: boolean) { }
}

export type MenuActions = ToggleMenu
