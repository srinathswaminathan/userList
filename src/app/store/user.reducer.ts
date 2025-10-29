import { createReducer, on, Action } from "@ngrx/store";
import { UserDto } from "../components/add-user/UserDto.const";
import * as actions from './user.actions'

export interface State {
    newUser : UserDto[],
    userList: UserDto[],
    loading: boolean
}

export const initialState: State = {
    newUser : [],
    userList: [],
    loading: false
}

export const reducer = createReducer(
    initialState,
    on(actions.addUserRequest, (state, {addUserData}) => ({
        ...state,
        newUser: [...state.newUser, addUserData],
        loading: true
    })
    ),
    on(actions.addUserSuccess, (state, {userList}) => ({
        ...state,
        userList: userList,
        loading: true
    })
    )
)
