import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from './user.reducer'

export const userState = createFeatureSelector<State>('user')

export const selectedUser$ = createSelector(
    userState,
    (state) => state.newUser
)

export const userList$ = createSelector(
    userState,
    (state) => state.userList
)