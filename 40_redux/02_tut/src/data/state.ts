import { VisibilityFilter, SHOW_ALL } from "./visibilityFilter";
import { TODO } from "./todo";

export type AppState = {
    visibilityFilter: VisibilityFilter,
    todos: TODO[]
}

export function initState(): AppState {
    return (
        {
            visibilityFilter: SHOW_ALL,
            todos: Array<TODO>(0)
        }
    )
}