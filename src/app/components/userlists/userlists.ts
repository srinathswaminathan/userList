import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-userlists',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './userlists.html',
  styleUrl: './userlists.scss',
})
export class Userlists {
   private router = inject(Router)
   userData = localStorage.getItem('userData')
   barChartData = {
    datasets: [{
      data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
    }]
  }
   barChartOptions = {
    labels: ['Assets Data'],
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
  }

  addUser() {
      this.router.navigate(['/addUser'])
  }
}
