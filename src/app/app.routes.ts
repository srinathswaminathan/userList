import { Routes } from '@angular/router';
import { Userlists } from './components/userlists/userlists'
import { AddUser } from './components/add-user/add-user';
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Userlists
    },
    {
        path: 'addUser',
        component: AddUser
    }
];
