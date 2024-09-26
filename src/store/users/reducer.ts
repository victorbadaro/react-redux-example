import { ActionTypes, ADD_USER, User } from './types';

type UsersState = User[];

const initialState: UsersState = [];

export function usersReducer(state = initialState, action: ActionTypes): UsersState {
	switch (action.type) {
		case ADD_USER: {
			const newUser: User = {
				...action.payload,
				id: state.length + 1
			};

			return [...state, newUser];
		}
		default:
			return state;
	}
}
