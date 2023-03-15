import { ProjectState } from "./ProjectProvider"


type ProjectActionType = 
    | {type: '[PROJECT] - ToogleProject'}


export const ProjectReducer = (state: ProjectState, action: ProjectActionType) => {
    switch(action.type){
        case '[PROJECT] - ToogleProject':
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        default:
            return state;
    }
}