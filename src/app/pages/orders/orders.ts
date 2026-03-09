import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  displayedColumns: string[] = ['orderId', 'customer', 'date', 'amount', 'status'];
  orders = [
    { id: '#ORD-1234', customer: 'anshika', date: 'feb 9 2026', amount: '$120.00', status: 'Shipped' },
    { id: '#ORD-4321', customer: 'kirti', date: 'feb 09 2025', amount: '$85.50', status: 'Pending' }
  ];
}