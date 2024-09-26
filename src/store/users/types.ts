import { UnknownAction } from 'redux';

export interface User {
	id: number;
	name: string;
	email: string;
};

export type UserToBeAdded = Omit<User, 'id'>;

export const ADD_USER = 'ADD_USER';

interface AddUserAction extends UnknownAction {
	type: typeof ADD_USER,
	payload: UserToBeAdded
}

export type ActionTypes = AddUserAction; // RemoveUserAction | UpdatedUserAction | ...
