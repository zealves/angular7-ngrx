import * as MenuActions from './menu.actions';
import * as fromApp from '../../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    collapse: State
}

export interface State {
    collapse: boolean;
}

const initialState: State = {
    collapse: false
};

export function menuReducer(state = initialState, action: MenuActions.MenuActions) {
    switch (action.type) {
        case (MenuActions.TOGGLE_MENU):
            return {
                ...state,
                collapse: action.payload
            };
        default:
            return state;
    }
}
