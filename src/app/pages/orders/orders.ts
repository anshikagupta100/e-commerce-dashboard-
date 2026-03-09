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
    { id: '#ORD-7712', customer: 'John Doe', date: 'Oct 24, 2023', amount: '$120.00', status: 'Shipped' },
    { id: '#ORD-7713', customer: 'Jane Smith', date: 'Oct 25, 2023', amount: '$85.50', status: 'Pending' }
  ];
}