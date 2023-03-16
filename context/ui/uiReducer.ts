import { UiState } from "./"


type UiActionType = 
    | {type: '[UI] - ToogleUi'}


export const uiReducer = (state: UiState, action: UiActionType) => {
    switch(action.type){
        case '[UI] - ToogleUi':
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        default:
            return state;
    }
}