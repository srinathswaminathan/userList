import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss',
})
export class AddUser implements OnInit{
 userForm !: FormGroup
 private router = inject(Router)
 ngOnInit() {
 this.userForm = new FormGroup({
    assettype: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
 })
}
submit() {
localStorage.setItem('userData', JSON.stringify(this.userForm.value))
window.alert('User data saved successfully')
this.router.navigate([''])
}

}
