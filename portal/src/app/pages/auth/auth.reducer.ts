import { Action, createReducer, on } from '@ngrx/store';
import {
  Login, Logout
} from './auth.action';
import { AuthState } from './auth.state';

/** initial values to Auth State */
const initialState: AuthState = {
  username: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['username'] : '',
  token: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '',
  name: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['name'] : '',
  email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['email'] : '',
  password: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['password'] : ''
};

/**
 * reducer to manage Auth state
 * set new values in AuthState
 */
export const __reducer = createReducer(initialState,
  on(Login, (state, payload) => {
    localStorage.setItem('user', JSON.stringify(payload));
    return {
      ...state,
      username: payload['username'].toString(),
      token: payload['token'].toString(),
      name: payload['name'].toString(),
      email: payload['email'].toString(),
      password: payload['password'].toString()
    };
  }),
  on(Logout, (state) => {
    localStorage.removeItem('user');
    return { ...state, username: '', token: '', name: '' };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return __reducer(state, action);
}
