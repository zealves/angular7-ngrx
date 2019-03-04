import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromMenu from '../core/menu/store/menu.reducers'

export interface AppState {
  shoppingList: fromShoppingList.State,
  auth: fromAuth.State,
  menu: fromMenu.State
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  menu: fromMenu.menuReducer
};
