export const ADD_GOAL = 'ADD_GOAL';
export const TOGGLE_GOAL = 'TOGGLE_GOAL';

const initState = {
    title: 'Steps to World Domination',
    goals: [{ newGoal: 'Graduate from Lambda School', completed: false }]
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_GOAL:
            return {
                ...state,
                goals: [...state.goals, { newGoal: action.payload, completed: false  }]
            };
        case TOGGLE_GOAL:
            return {
                ...state,
                goals: state.goals.map((goal, index) => {
                    if (index === action.payload) {
                        return { ...goal, completed: !goal.completed };
                    } else {
                        return goal;
                    }
                })
            };              
        default:
            return state;
    }
}

export default reducer;