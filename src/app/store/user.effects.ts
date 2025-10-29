import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addUserRequest, addUserSuccess } from './user.actions';
import { delay, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUserRequest),
            delay(200),
            map(()=> 
                addUserSuccess({userList:
                    [{ assettype: '',
                    quantity: '',
                     price: 0,
                     date: ''
                    }]

            })
)

    )
)
}