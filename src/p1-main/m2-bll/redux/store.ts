import {combineReducers, legacy_createStore} from "redux";
import {skillsReducer} from "./skills-reducer";

const rootReducer = combineReducers({
    skills : skillsReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)
