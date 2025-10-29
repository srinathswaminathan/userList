import { createAction, props } from "@ngrx/store";
import { UserDto } from '../components/add-user/UserDto.const'

export const addUserRequest = createAction(
    '[addUser] add data',
    props<{addUserData: UserDto}>()
)

export const addUserSuccess = createAction(
    '[userList]',
    props<{userList: UserDto[]}>()
)

