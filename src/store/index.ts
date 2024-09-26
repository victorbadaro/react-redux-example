import { combineReducers, createStore } from 'redux';
import { usersReducer } from './users/reducer';

const rootReducer = combineReducers({
	users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
