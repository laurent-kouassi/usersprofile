import TYPES from '../types';

const initialState = {
    users: '',
};

// reducer handler update users state with new action data
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.USERS:
            return {...state, users: action.payload};
        case TYPES.UPDATE_USER:
            return { users: state.users.map(user => user.id == action.payload.id ? action.payload : user )};
        case TYPES.DELETE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state;
    }
};