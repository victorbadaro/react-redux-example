import { ActionTypes, ADD_USER, UserToBeAdded } from './types';

export function addUser(userToBeAdded: UserToBeAdded): ActionTypes {
	return {
		type: ADD_USER,
		payload: userToBeAdded
	};
}
