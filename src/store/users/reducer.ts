import { ActionTypes, ADD_USER, User } from './types';

interface UsersState {
	users: User[];
}

const initialState: UsersState = {
	users: []
};

export function userReducer(state = initialState, action: ActionTypes): UsersState {
	switch (action.type) {
		case ADD_USER: {
			const newUser: User = {
				...action.payload,
				id: state.users.length + 1
			};

			return {
				...state,
				users: [...state.users, newUser]
			};
		}
		default:
			return state;
	}
}
