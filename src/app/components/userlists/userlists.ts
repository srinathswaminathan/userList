import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { Store } from '@ngrx/store';
import { selectedUser$ } from '../../store/user.selector';
import { UserDto } from '../add-user/UserDto.const';
@Component({
  selector: 'app-userlists',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './userlists.html',
  styleUrl: './userlists.scss',
})
export class Userlists implements OnInit{
  barChartData: any; 
  barChartOptions: any;
  private router = inject(Router)
  private store = inject(Store)
  
  userList = this.store.select(selectedUser$)
  userlists: UserDto[] = []

 ngOnInit() {
  this.userList.subscribe((data) => {
    this.userlists = data;
    if(this.userlists) {
      this.chartMethod()
    }
    console.log(data)
  })
  
  
  

 }

 chartMethod() {
 this.barChartData = {
    datasets: [{
      data: this.userlists
      
    }]
  }
   this.barChartOptions = {
    labels: ['Assets Data'],
    parsing: {
      xAxisKey: 'date',
      yAxisKey: 'quantity'
    }
  }
}

}
