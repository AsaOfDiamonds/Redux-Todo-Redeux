import { ADD_GOAL, TOGGLE_GOAL } from "../reducers";

export const addGoal = goal => {
    return {
        type: ADD_GOAL,
        payload: goal
    };
};

export const toggleGoal = index => {
    return {
        type: TOGGLE_GOAL,
        payload: index
    };
};


