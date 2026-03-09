import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics implements AfterViewInit {
  @ViewChild('salesChart') salesChart!: ElementRef;

  stats = [
    { label: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', icon: 'bi-currency-dollar', color: '#4caf50' },
    { label: 'Subscriptions', value: '+2350', trend: '+180.1%', icon: 'bi-people', color: '#2196f3' },
    { label: 'Sales', value: '+12,234', trend: '+19%', icon: 'bi-cart-check', color: '#ff9800' },
    { label: 'Active Now', value: '+573', trend: '+201', icon: 'bi-activity', color: '#f44336' }
  ];

  ngAfterViewInit() {
    new Chart(this.salesChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Monthly Sales',
          data: [1200, 1900, 1500, 2100, 2400, 3000],
          borderColor: '#007bff',
          tension: 0.4,
          fill: true,
          backgroundColor: 'rgba(0, 123, 255, 0.1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
      }
    });
  }
}