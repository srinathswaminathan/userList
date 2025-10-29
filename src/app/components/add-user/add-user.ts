import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Actions from '../../store/user.actions';
import { selectedUser$ } from '../../store/user.selector';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss',
})
export class AddUser implements OnInit{
 userForm !: FormGroup
 private router = inject(Router)
 fb = inject(FormBuilder)
 store = inject(Store)

 userList = this.store.select(selectedUser$)

 ngOnInit() {
 this.userForm = this.fb.group({
  assettype: ['', Validators.required],
  quantity: ['', Validators.required],
  price: ['', Validators.required],
  date: ['', Validators.required]
})

this.userForm.controls['assettype'].valueChanges.subscribe((obj)=> {
  console.log(obj)
})
this.userList.subscribe((data) => {
console.log(data)
})

}

submit() {
  this.store.dispatch(Actions.addUserRequest({addUserData:this.userForm.value}))

// localStorage.setItem('userData', JSON.stringify(this.userForm.value))
window.alert('User data saved successfully')
this.router.navigate([''])
}

}
