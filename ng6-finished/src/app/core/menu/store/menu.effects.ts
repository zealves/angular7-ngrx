import { Effect, Actions } from "@ngrx/effects"
import { Injectable } from "@angular/core"
import * as MenuAction from './menu.actions'
import { map, switchMap } from "rxjs/operators";
import { from } from 'rxjs';

@Injectable()
export class MenuEffects {
    @Effect({ dispatch: false })
     toggleMenu = this.actions$
            .ofType(MenuAction.TOGGLE_MENU)
            .pipe(
                map((action: MenuAction.ToggleMenu) => {
                console.log(action.payload, 'action.payload')
                return action.payload;
                }),
                switchMap((menuData) => {
                    console.log(menuData)
                    return from(MenuAction.TOGGLE_MENU)
                })
            )

    // someEffect$: Observable<Action> = this.actions$.pipe(
    //     ofType(UserActions.LOGIN), // use the pipeable ofType operator
    //     map(() => new AnotherAction())
    // );

    constructor(private actions$: Actions) {
    }
}