import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './frame.html',
  styleUrl: './frame.css'
})
export class FrameComponent {}